import { Route, Routes } from "react-router-dom";
import { PATHS } from "../utils/paths";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
    return (<>
    <Routes>
    <Route path={PATHS.login} element={<Login/>}/>
        <Route path={PATHS.base} element={<DefaultLayout/>}> 
        <Route path={PATHS.base} element={<Home/>}/>
        
        </Route>
    </Routes>
    </>)
}