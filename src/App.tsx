import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inicio from './pages/Inicio/Inicio';
import TiposCozinha from './pages/TiposCozinha/TiposCozinha';
import LayoutPadrao from './pages/Layout/LayoutPadrao';
import Reserva from './pages/Reserva/Reserva';
import InicioRestaurante from './pages/InicioRestaurante/InicioRestaurante';
import Mapeamento from './pages/Mapeamento/Mapeamento';
import PerfilCliente from './pages/Layout/LayoutPerfilCliente';
import DadosCliente from './pages/DadosCliente/DadosCliente';

function App() {

  return (
    <LayoutPadrao>
      {/* <Inicio /> */}
      {/* <TiposCozinha /> */}
      {/* <Reserva /> */}
      {/* <InicioRestaurante /> */}
      {/* <Mapeamento /> */}

      {/* paginas de perfil do cliente */}
      {/* pagina dados do cliente */}
      <PerfilCliente>
        <DadosCliente />
      </PerfilCliente>


    </LayoutPadrao>
  )
}

export default App
