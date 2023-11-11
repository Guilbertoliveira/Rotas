import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/home" element={<Home />} >
                    <Route path="filho" element={<h1>Eu sou filho</h1>} />
                </Route>
            </Routes>
        </BrowserRouter >

    )
}