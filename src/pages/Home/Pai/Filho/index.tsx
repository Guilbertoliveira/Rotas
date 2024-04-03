import { Outlet, useLocation, useNavigate, } from "react-router-dom";

export function Filho() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;


    function handleOpenModal() {
        navigate(`${currentPath}/modal`);
    }


    return (
        <div>
            <button onClick={handleOpenModal}>Abrir Modal</button>
            <Outlet />
        </div>
    );
}