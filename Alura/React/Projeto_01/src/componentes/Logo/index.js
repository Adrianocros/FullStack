import './style.css'    
import logo from '../../imagens/logo.svg';



function Logo(){
    return( <div className='logo'>
        <img src={logo} className='logoImg' alt="Logo"/>
        <p><strong>Alura Books</strong></p>
         </div>)
}

export default Logo;