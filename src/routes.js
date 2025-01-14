import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Post from "./pages/Post";
import Menu from "./components/Menu";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Rodape from "./components/Rodape";
import PaginaPadrao from "./components/PaginaPadrao";
import NaoEncontrada from "./pages/NaoEncontrada";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />}/>
                    <Route path="sobremim" element={<SobreMim />}/>
                    <Route path="posts/:id" element={<Post />}/>
                </Route>
                <Route path="*" element={<NaoEncontrada />}/>
            </Routes>
            <Rodape/>
        </BrowserRouter>
    );
}

export default AppRoutes;
