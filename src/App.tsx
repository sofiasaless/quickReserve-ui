import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inicio from './pages/Inicio/Inicio';
import TiposCozinha from './pages/TiposCozinha/TiposCozinha';
import LayoutPadrao from './pages/Layout/LayoutPadrao';
import Reserva from './pages/Reserva/Reserva';
import InicioRestaurante from './pages/InicioRestaurante/InicioRestaurante';
import Mapeamento from './pages/Mapeamento/Mapeamento';
import LayoutPerfil from './pages/Layout/LayoutPerfil';
import DadosCliente from './pages/DadosCliente/DadosCliente';
import ReservasCliente from './pages/ReservasCliente/ReservasCliente';
import DadosRestaurante from './pages/DadosRestaurante/DadosRestaurante';
import GerenciaMesas from './pages/GerenciaMesas/GerenciaMesas';

function App() {

  return (
    <LayoutPadrao>
      {/* <Inicio /> */}
      {/* <TiposCozinha /> */}
      {/* <Reserva /> */}
      <InicioRestaurante />
      {/* <Mapeamento /> */}

      {/* paginas de perfil do cliente */}
      {/* pagina dados do cliente */}
      {/* <LayoutPerfil>
        <DadosCliente />
      </LayoutPerfil> */}

      {/* pagina dados do cliente */}
      {/* <LayoutPerfil>
        <ReservasCliente />
      </LayoutPerfil> */}

      {/* paginas de perfil do restaurante */}
      {/* pagina dados do restaurante */}
      {/* <LayoutPerfil>
        <DadosRestaurante />
      </LayoutPerfil> */}

      {/* pagina de gerenciamento de mesas */}
      {/* <LayoutPerfil>
        <GerenciaMesas />
      </LayoutPerfil> */}


    </LayoutPadrao>
  )
}

export default App
