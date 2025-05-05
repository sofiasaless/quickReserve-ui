import './style.css';
import restauranteLogado from '../../assets/material/restaurant.png'

// components
import Logo from '../Logo/Logo';

// imports
import { Link } from 'react-router-dom';
import { TipoUsuario } from '../../enum/TipoUsuario';

const NavbarRestaurante = () => {

  return (
    <nav id='navbar-items' className="navbar navbar-expand-lg navbar-light bg-light py-2 sticky-top">
      <div className="container d-flex align-items-center justify-content-between">

        <div>
          <Logo />
        </div>

        <div className="navbar-nav d-flex flex-row gap-4 justify-content-center align-items-center">
          <div className='gap-5 d-flex flex-row justify-content-center align-items-center'>
            <Link to={'/inicio-restaurante'} className="fw-bold text-laranja-um text-decoration-none active" aria-current="page">Início</Link>
            <Link to={'/mapeamento'} className="fw-bold text-laranja-um text-decoration-none">Mapeamento das mesas</Link>
          </div>

          <div className='vertical-break rounded-4'></div>
          <Link
            to={'/dados-restaurante'}
            state={{
              tipo: TipoUsuario.RESTAURANTE
            }}
          >
            <img src={restauranteLogado} className='img-logo-usuarios' alt="" />
          </Link>

        </div>

      </div>
    </nav>
  )
}

export default NavbarRestaurante