import './style.css'

// assets
import imgMeusDados from '../../assets/material/profile.png'
import imgReservas from '../../assets/material/to-do-list.png'
import imgMesas from '../../assets/material/table.png'

// imports
import { TipoUsuario } from '../../enum/TipoUsuario'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NavbarPerfil = () => {

  // recebendo os parametros passados na rota
  const location = useLocation()
  const tipoUsuario = location.state?.tipo as TipoUsuario;

  return (
    <div className="div-navbar-perfil d-flex flex-column flex-shrink-0 p-4" style={{ width: '280px' }}>
      {
        tipoUsuario === TipoUsuario.CLIENTE ?
          <ul className="nav nav-pills flex-column mb-auto gap-2">
            <li className="nav-item d-flex align-items-center">
              <img
                src={imgMeusDados} alt=""
                style={{
                  height: '25px'
                }}
              />
              <Link to={'/dados-cliente'}
                state={{
                  tipo: TipoUsuario.CLIENTE
                }}
                className="nav-link link-light" aria-current="page">
                Meus dados
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <img
                src={imgReservas} alt=""
                style={{
                  height: '25px'
                }}
              />
              <Link to={'/minhas-reservas'}
                state={{
                  tipo: TipoUsuario.CLIENTE
                }}
                className="nav-link link-light" aria-current="page">
                Minhas reservas
              </Link>
            </li>
          </ul>
          :
          <ul className="nav nav-pills flex-column mb-auto gap-2">
            <li className="nav-item d-flex align-items-center">
              <img
                src={imgMeusDados} alt=""
                style={{
                  height: '25px'
                }}
              />
              <a href="#" className="nav-link link-light" aria-current="page">
                Meus dados
              </a>
            </li>

            <li className="nav-item d-flex align-items-center">
              <img
                src={imgMesas} alt=""
                style={{
                  height: '25px'
                }}
              />
              <a href="#" className="nav-link link-light" aria-current="page">
                Minhas mesas
              </a>
            </li>
          </ul>
      }

    </div>
  )
}

export default NavbarPerfil