import { Outlet } from 'react-router-dom';

export function Home() {
    return (
        <div style={{ border: '1px solid white' }}>
            <p style={{ color: 'white' }}>esse seria o caso da necessidade de consumir o que o pai está renderizando dentro do filho</p>
            <h1>eu sou avô</h1>
            <Outlet />
        </div>
    )
}