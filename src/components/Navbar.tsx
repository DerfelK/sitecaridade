import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
      <div className="flex justify-between items-center">
        <img src={logo} className="w-24 md:ml-10" alt="Logo" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex p-3 rounded lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-100" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-100" aria-hidden="true" />
          )}
        </button>
      </div>
      <ul className={`lg:flex flex-col mt-5 lg:mt-0 lg:flex-row lg:ml-auto mr-0 md:mr-4 ${isOpen ? "block" : "hidden"}`}>
        <li className="mb-4 md:mb-0">
          <Link to="/" className={`navbar__link mb-4 sm:mb-0 ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link to="/historia" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/historia' ? 'active' : ''}`}>História da Casa</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link to="/fundamentos" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/fundamentos' ? 'active' : ''}`}>Fundamentos</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link to="/calendario" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/calendario' ? 'active' : ''}`}>Calendário</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link to="/fotos" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/fotos' ? 'active' : ''}`}>Fotos</Link>
        </li>
        <li className="mb-4 md:mb-0">
        <Link to="/caridade" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/caridade' ? 'active' : ''}`}>Caridade</Link>
        </li>
        <li className="mb-4 md:mb-0">
          <Link to="/contato" className={`navbar__link mt-3 md:mt-0 md:ml-10 ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
