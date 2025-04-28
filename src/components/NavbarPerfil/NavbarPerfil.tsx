import './style.css'

// assets
import imgMeusDados from '../../assets/material/profile.png'
import imgReservas from '../../assets/material/to-do-list.png'
import imgMesas from '../../assets/material/table.png'

const NavbarPerfil = () => {
  return (
    <div className="div-navbar-perfil d-flex flex-column flex-shrink-0 p-4" style={{ width: '280px' }}>
      {/* <ul className="nav nav-pills flex-column mb-auto gap-2">
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
            src={imgReservas} alt=""
            style={{
              height: '25px'
            }}
          />
          <a href="#" className="nav-link link-light" aria-current="page">
            Minhas reservas
          </a>
        </li>
      </ul> */}

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
    </div>
  )
}

export default NavbarPerfil