import './style.css';
import usuarioLogado from '../../assets/material/user.png'
import restauranteLogado from '../../assets/material/restaurant.png'

import { FunctionComponent } from 'react';

// components
import Logo from '../Logo/Logo';

// imports
import { Link } from 'react-router-dom';

interface NavbarProps {
  user?: boolean;
  onLogout?: () => void;
  onLogin?: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = () => {

  return (
    <nav id='navbar-items' className="navbar navbar-expand-lg navbar-light bg-light py-2 sticky-top">
      <div className="container d-flex align-items-center justify-content-between">

        <div>
          <Logo />
        </div>

        <div className="navbar-nav d-flex flex-row gap-4 justify-content-center align-items-center">
          <div className='gap-5 d-flex flex-row justify-content-center align-items-center'>
            <Link to={'/'} className="fw-bold text-laranja-um text-decoration-none active" aria-current="page">Início</Link>
            <Link to={'/tipos-cozinha'} className="fw-bold text-laranja-um text-decoration-none">Tipos de cozinha</Link>
          </div>

          <div className='vertical-break rounded-4'></div>
          <button className='btn-laranja-um px-5'>Entrar</button>
          {/* <img src={usuarioLogado} className='img-logo-usuarios' alt="" /> */}
          {/* <img src={restauranteLogado} className='img-logo-usuarios' alt="" /> */}
        </div>

      </div>
    </nav>
  )
}

export default Navbar