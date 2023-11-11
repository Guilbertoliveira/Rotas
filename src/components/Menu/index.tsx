import { Link } from 'react-router-dom';
import * as S from './styles'
import listaPost from '../../../../mock';

export function Menu() {

    return (
        <S.Container>
            <ul>
                <li><Link to="/avo">Avô</Link></li>
                <ul>
                    <li><Link to="avo/pai">Pai</Link></li>
                    <ul>
                        <li><Link to="avo/pai/filho">Filho</Link></li>
                    </ul>
                </ul>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/posts">Posts Dinamicos</Link></li>
                <ul>
                    {listaPost.map(({ id, title }) => {
                        return (<li>
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </li>)
                    })
                    }
                </ul>
            </ul>
        </S.Container>
    )
}