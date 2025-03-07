import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const ImgLogoContainer = styled.img`
    margin-right: 10px;
`

function Logo(){
    return( <LogoContainer>
        <ImgLogoContainer src={logo} className='logoImg' alt="Logo"/>
        <p><strong>Alura Books</strong></p>
         </LogoContainer>)
}

export default Logo;