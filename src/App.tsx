import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Inicio from './pages/Inicio/Inicio';
import TiposCozinha from './pages/TiposCozinha/TiposCozinha';
import LayoutPadrao from './pages/Layout/LayoutPadrao';

function App() {

  return (
    <LayoutPadrao>
      <Inicio />
      {/* <TiposCozinha /> */}
    </LayoutPadrao>
  )
}

export default App
