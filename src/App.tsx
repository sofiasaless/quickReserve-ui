import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inicio from './pages/Inicio/Inicio';
import TiposCozinha from './pages/TiposCozinha/TiposCozinha';
import LayoutPadrao from './pages/Layout/LayoutPadrao';
import Reserva from './pages/Reserva/Reserva';

function App() {

  return (
    <LayoutPadrao>
      {/* <Inicio /> */}
      {/* <TiposCozinha /> */}
      <Reserva />
    </LayoutPadrao>
  )
}

export default App
