import { Outlet } from "react-router-dom"
import RotasRestauranteProtegidas from "../PaginasProtegidas/RotasRestauranteProtegidas"
import NavbarRestaurante from "../../components/Navbar/NavbarRestaurante"

const LayoutUsuarioRestuarante = () => {
  return (
    <RotasRestauranteProtegidas>
      <NavbarRestaurante />
      <Outlet />
    </RotasRestauranteProtegidas>
  )
}

export default LayoutUsuarioRestuarante