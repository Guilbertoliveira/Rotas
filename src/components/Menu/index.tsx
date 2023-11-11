import { Link } from 'react-router-dom';
import * as S from './styles'


export function Menu() {
    return (
        <S.Container>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="home/filho">filho</Link></li>
            </ul>
        </S.Container>
    )
}