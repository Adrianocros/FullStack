
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader'
import Icones from '../../componentes/IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #ffff;
    display: flex;
    justify-content: center;
`


function Header(){
    return(
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>    
    </HeaderContainer>
    )
}

export default Header