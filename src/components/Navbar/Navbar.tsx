import './style.css';
import usuarioLogado from '../../assets/material/user.png'

import { useEffect, useState } from 'react';

// components
import Logo from '../Logo/Logo';

// imports
import { Link } from 'react-router-dom';
import { TipoUsuario } from '../../enum/TipoUsuario';
import { AuthService } from '../../services/auth.service';
import { HttpStatusCode } from 'axios';

const Navbar = () => {

  const [estadoUsuario, setEstadoUsuario] = useState<HttpStatusCode>(HttpStatusCode.Unauthorized)

  useEffect(() => {
    const verificarCondicoesUsuario = async () => {
      let token = localStorage.getItem('token');
      if (!token) {
        setEstadoUsuario(HttpStatusCode.Unauthorized)
        return
      }
      
      // verificando se o token nao expirou
      const authServ = new AuthService()
      const resultado = await authServ.verificarEstadoUsuario(TipoUsuario.CLIENTE)
      setEstadoUsuario(resultado);

    }

    verificarCondicoesUsuario()

  }, [])

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
          {
            (estadoUsuario === HttpStatusCode.Accepted) ?
            <Link 
              to={'/dados-cliente'} 
              state={{
                tipo: TipoUsuario.CLIENTE 
              }}
            >
              <img src={usuarioLogado} className='img-logo-usuarios' alt="" />
            </Link>
            :
            <Link to={'/login-cliente'} className='text-decoration-none btn-laranja-um px-5'>Entrar</Link>
          }

          {/* <img src={usuarioLogado} className='img-logo-usuarios' alt="" /> */}
          {/* <img src={restauranteLogado} className='img-logo-usuarios' alt="" /> */}
        </div>

      </div>
    </nav>
  )
}

export default Navbar