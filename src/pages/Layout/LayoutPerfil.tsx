import Container from "../../components/Container/Container";
import NavbarPerfil from "../../components/NavbarPerfil/NavbarPerfil";
import { Outlet } from "react-router-dom";

const LayoutPerfil = () => {
  return (
    <Container>
      <section
        style={{
          backgroundColor: 'var(--cinza)',
          height: '100vh',
        }}
        className="d-flex shadow"
      >
        <NavbarPerfil />

        <div className="d-flex flex-column px-5 py-3 gap-4" style={{ width: '100%' }}>
          <Outlet />
        </div>
        
      </section>
    </Container>
  )
}

export default LayoutPerfil;