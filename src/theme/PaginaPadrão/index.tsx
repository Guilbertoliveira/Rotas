import { Outlet } from "react-router-dom";
import * as S from './styles'

export function PaginaPadrão() {
    return (
        <S.Container>
            <Outlet />
        </S.Container>
    )
}