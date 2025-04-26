import { FunctionComponent } from "react";
import Navbar from "../../components/Navbar/Navbar"

interface LayoutPadraoProps {
  children?: React.ReactNode;
}

const LayoutPadrao:FunctionComponent<LayoutPadraoProps> = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default LayoutPadrao;