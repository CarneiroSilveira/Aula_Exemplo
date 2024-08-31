import { Link } from 'react-router-dom';
import './styles.css';
import logoReact from '../../assets/react.svg';
import logoVite from '../../../public/vite.svg'

export default function Header(){
    return(
            <header>
                <h1>Minha Página HTML Básica <img className='logo react' src={logoReact}/> <img className='logo' src={logoVite}/></h1>
                <nav>
                    <ul>
                        <li><Link className='Link' to={"/"}>Home</Link></li>
                        <li><Link className='Link' to={"/about"}>Sobre</Link></li>
                    </ul>
                </nav>
            </header>
    )
}