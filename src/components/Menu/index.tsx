import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="home/filho">filho</Link></li>
            </ul>
        </nav>
    )
}