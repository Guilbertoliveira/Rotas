import { Outlet } from 'react-router-dom';

export function Home() {
    return (
        <>
            <p>home</p>
            <Outlet />
        </>
    )
}