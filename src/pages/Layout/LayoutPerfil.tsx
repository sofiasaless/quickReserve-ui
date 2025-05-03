import './style.css'

// componentes
import NavbarPerfil from "../../components/NavbarPerfil/NavbarPerfil";

// imports
import { Outlet } from "react-router-dom";

const LayoutPerfil = () => {
  return (
    <div className='container section-perfil'>
      <section
        style={{
          backgroundColor: 'var(--cinza)'
        }}
        className="d-flex shadow section-perfil"
      >
        <NavbarPerfil />

        <div className="d-flex flex-column px-5 py-3 gap-4" style={{ width: '100%' }}>
          <Outlet />
        </div>
        
      </section>
    </div>
  )
}

export default LayoutPerfil;