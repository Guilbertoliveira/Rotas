import { Outlet } from "react-router-dom";

export function Posts() {
    return (
        <>
            <h1>Posts</h1>
            <Outlet />
        </>
    )
}