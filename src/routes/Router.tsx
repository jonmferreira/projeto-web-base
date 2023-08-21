import { Route, Routes } from "react-router-dom";
import { Login } from "@pages/general/Login";
import { RoutersPathName } from "@/routes/schemas.ts";

export function Router() {
    return (
        <Routes>
            <Route
                path={"/projeto-web-base*"}
                element={<Login />}
            />
            <Route
                path={"/*"}
                element={<Login />}
            />
            <Route
                path={RoutersPathName.Login}
                element={<Login />}
            />

        </Routes>
    )
}
