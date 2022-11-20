import { HeaderComponent } from "./style";
import Logo from '../../assets/Logo.svg'

export function Header() {
    return (
        <HeaderComponent>
            <img src={Logo} alt="Dsmeta" />
            <h1>DSMeta</h1>
            <span>Desenvolvido por Marcos alexandre na semana Spring React com @devisuperior.io</span>
        
        </HeaderComponent>
    )
}