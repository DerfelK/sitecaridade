import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex">
      <img src={logo} className="mr-[233px] mt-[16px] ml-[130px]" />
      <ul className="flex flex-1 items-center justify-end">
        <li className="navbar__li">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li>
          <Link to="/historia" className="navbar__link ml-[43px]">História da Casa</Link>
        </li>
        <li>
          <Link to="/fundamentos" className="navbar__link ml-[43px]">Fundamentos</Link>
        </li>
        <li>
          <Link to="/calendario" className="navbar__link ml-[43px]">Calendário</Link>
        </li>
        <li>
          <Link to="/fotos" className="navbar__link ml-[43px]">Fotos</Link>
        </li>
        <li>
        <Link to="/caridade" className="navbar__link ml-[43px]">Caridade</Link>
        </li>
        <li><Link to="/contato" className="navbar__link ml-[43px] mr-[142px]">Contato</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
