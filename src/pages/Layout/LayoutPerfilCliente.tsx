import { FunctionComponent } from "react";
import Container from "../../components/Container/Container";
import NavbarPerfil from "../../components/NavbarPerfil/NavbarPerfil";

interface LayoutPerfilClienteProps {
  children?: React.ReactNode;
}

const LayoutPerfilCliente:FunctionComponent<LayoutPerfilClienteProps> = ({children}) => {
  return (
    <Container>
      <section
        style={{
          backgroundColor: 'var(--cinza)',
          height: '100vh',
        }}
        className="d-flex"
      >
        <NavbarPerfil />

        <div className="d-flex flex-column px-5 py-3 gap-4" style={{ width: '100%' }}>
          {children}
        </div>
        
      </section>
    </Container>
  )
}

export default LayoutPerfilCliente;