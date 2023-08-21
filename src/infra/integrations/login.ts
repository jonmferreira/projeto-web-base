import RemoteAccessClient from "../api/axios-s-managed.ts";

export interface Login {
    username: string
    password: string
}

export interface LoginResponse {
    refresh: string
    access: string
    email: string
    permissions: string[]
    groups: string[]
}


export enum Perfis {
    Administrador = "Administrador",
    Cliente = "Hospital",
    Enfermagem = "Enfermagem",
    Tecnico = "Técnico",
    Transportador = "Transportador",

}

const groupsMapped = {
    Administrador: [
        "ADMINISTRATIVO",
        "ADMINISTRADORES"
    ],
    Cliente: [
        "CLIENTE"
    ],
    Tecnico: [
        "TECNICOENFERMAGEM",
        "TECNICORECEBIMENTO",
        "TECNICOTERMO",
        "TECNICOEMBALAGEM",
        "TECNICOESTERILIZACAO",
        "TECNICODISTRIBUICAO",
    ],
    Transportador: [
        "MOTORISTA"
    ],
    Enfermagem: [
        "SUPERVISAOENFERMAGEM",
        "ENFERMAGEM"
    ]
}
const isAdmin = (groups: string[]) => {
    const index =  groups.findIndex(group => {
        return groupsMapped.Administrador.includes(group)
    })
    return index !== -1
}
const isClient = (groups: string[]) => {
    const index = groups.findIndex(group => {
        return groupsMapped.Cliente.includes(group)
    })
        return index !== -1
}
const isTechnician = (groups: string[]) => {
    const index = groups.findIndex(group => {
        return groupsMapped.Tecnico.includes(group)
    })
    return index !== -1
}
const isTransporter = (groups: string[]) => {
    const index = groups.findIndex(group => {
        return groupsMapped.Transportador.includes(group)
    })
    return index !== -1
}
const isEnfermagem = (groups: string[]) => {
    const index = groups.findIndex(group => {
        return groupsMapped.Enfermagem.includes(group)
    })
    return index !== -1
}
const regroup = (groups: string[]) => {

    const newgroups = []
    if (isAdmin(groups)) {
        newgroups.push(Perfis.Administrador)
    }
    if (isClient(groups)) {
        newgroups.push(Perfis.Cliente)
    }
    if (isEnfermagem(groups)) {
        newgroups.push(Perfis.Enfermagem)
    }
    if (isTechnician(groups)) {
        newgroups.push(Perfis.Tecnico)
    }
    if (isTransporter(groups)) {
        newgroups.push(Perfis.Transportador)
    }

    return newgroups;
}

export const LoginAPI = {
    logar: async (user: Login) => {
            const api = RemoteAccessClient.getInstance(undefined);
            const userResponse: LoginResponse = await api({
                url: "token/",
                method: "POST",
                data: {username: user.username, password: user.password},
            })
            const userRegrouped = {
                ...userResponse,
                groups: regroup(userResponse.groups)
            }
            RemoteAccessClient.ReconfigureInstance(userResponse.access)
            return {
                status: 200,
                statusText: 'Sucesso ao logar.',
                data: userRegrouped
            };
    }
}
