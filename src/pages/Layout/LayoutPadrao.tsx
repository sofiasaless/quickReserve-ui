import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from "react-router-dom";

const LayoutPadrao = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LayoutPadrao;