import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";
import { PaginaPadrão } from "./theme/PaginaPadrão";
import { Post } from "./pages/Posts/Post";
import { Filho } from "./pages/Home/Pai/Filho";
import { ModalTeste } from "./pages/Home/Pai/Filho/components/ModalTeste";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <Menu />
                <Routes>
                    <Route element={<PaginaPadrão />}>
                        <Route path="/avo" element={<Home />} >
                            <Route path="pai" element={<><h2>Eu sou pai</h2><Outlet /></>}>
                                <Route path="filho" element={<Filho />}>
                                    <Route path="modal" element={<ModalTeste />} />
                                </Route>
                                <Route path="irmao" element={<h1>oi</h1>} />
                            </Route>
                        </Route>
                        <Route path="/about" element={<About />} />
                        <Route path="/posts" element={<Posts />} >
                            <Route path=":id" element={<Post />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter >

    );
}