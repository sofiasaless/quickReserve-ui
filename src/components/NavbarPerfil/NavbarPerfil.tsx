import './style.css'

// assets
import imgMeusDados from '../../assets/material/profile.png'
import imgReservas from '../../assets/material/to-do-list.png'
import imgMesas from '../../assets/material/table.png'
import imgSair from '../../assets/material/logout.png'

// imports
import { TipoUsuario } from '../../enum/TipoUsuario'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { HttpStatusCode } from 'axios'
import { AuthService } from '../../services/auth.service'

const NavbarPerfil = () => {

  // recebendo os parametros passados na rota
  const location = useLocation()
  const tipoUsuario = location.state?.tipo as TipoUsuario;

  const navegar = useNavigate()

  // constrole de login do perfil
  useEffect(() => {
    const verificarCondicoesUsuario = async () => {
      let token = localStorage.getItem('token');
      if (!token) {
        window.confirm('Você não está logado!')
        navegar('/')
        return
      }

      // verificando se o token nao expirou
      const authServ = new AuthService()
      const resultado = await authServ.verificarEstadoUsuario(TipoUsuario.CLIENTE)

      if (resultado === HttpStatusCode.Unauthorized) {
        window.confirm('Você não está logado!')
        navegar('/')
      }
    }

    verificarCondicoesUsuario()
  }, [])

  return (
    <div className="div-navbar-perfil d-flex flex-column justify-content-between flex-shrink-0 p-4" style={{ width: '280px' }}>
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
      <hr />
      <ul className='nav nav-pills'>
        <li className="nav-item d-flex align-items-center">
          <img
            src={imgSair} alt=""
            style={{
              height: '25px'
            }}
          />
          <a className="nav-link link-light" aria-current="page"
            onClick={() => {
              localStorage.removeItem('token')
              window.location.reload()
            }}
          >
            Sair
          </a>
        </li>
      </ul>

    </div>
  )
}

export default NavbarPerfil