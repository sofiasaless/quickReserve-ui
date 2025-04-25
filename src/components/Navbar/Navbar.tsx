import { FunctionComponent } from 'react';
import Logo from '../Logo/Logo';
import './style.css';

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
            <a className="fw-bold text-laranja-um text-decoration-none active" aria-current="page" href="#">Início</a>
            <a className="fw-bold text-laranja-um text-decoration-none" href="#">Tipos de cozinha</a>
          </div>

          <div className='vertical-break rounded-4'></div>
          <button className='btn-laranja-um px-5'>Entrar</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar