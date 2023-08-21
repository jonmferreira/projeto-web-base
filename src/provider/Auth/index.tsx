import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {Login, LoginAPI, LoginResponse} from "@/infra/integrations/login.ts";
import {RoutersPathName} from "@/routes/schemas.ts";

// @ts-ignore
const setLocalStorage = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e)
    }
}

// @ts-ignore
const getLocalStorage = (key, initialValue) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        return initialValue;
    }
}

const getLocalStoragePerfil = (key: string, initialValue: string) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? value.replaceAll("\"", '') : initialValue;
    } catch (e) {
        return initialValue;
    }
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContext);
}

const initialState: LoginResponse = {
    access: "",
    email: "",
    refresh: "",
    groups: [],
    permissions: []
};

interface AuthContextType {
    user: LoginResponse;
    signin: (user: Login) => Promise<void>;
    signout: () => void;
    estaLogado: boolean;
    perfil: string;
    selecionarPerfil: (perfilselecionado: string) => void;
}

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<LoginResponse>(() => getLocalStorage("user", initialState));
    const [perfil, setPerfil] = useState<string>(() => getLocalStoragePerfil("perfil", ''))

    const signin = async (user: Login): Promise<void> => {
        const userResponse = await LoginAPI.logar(user)
        if (!userResponse) {
            throw "Error ao logar"
        }
        const {data} = userResponse
        // @ts-ignore
        setUser(data);
    };

    const signout = () => {
        setUser(initialState);
        setPerfil('')
    }

    useEffect(() => {
        setLocalStorage("user", user);
    }, [user]);
    useEffect(() => {
        setLocalStorage("perfil", perfil);
    }, [perfil]);

    const estaLogado = useMemo(() => {
        if (user?.access?.length) {
            return true;
        }
        return false;
    }, [user])

    const selecionarPerfil = (perfilSelecionado: string) => {
        setPerfil(perfilSelecionado)
    }

    const value = {user, signin, signout, estaLogado, selecionarPerfil, perfil};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const RequireAuth = ({children}: { children: JSX.Element }) => {
    const {estaLogado} = useAuth();
    const location = useLocation();

    if (!estaLogado) {
        return (
            <Navigate
                to={RoutersPathName.Login}
                state={{from: location}}
                replace
            />
        )
    }
    if (location.pathname == '/') {
        return (
            <Navigate
                to={RoutersPathName.Home}
                state={{from: location}}
                replace
            />
        )
    }
    return children;
}
