import { HttpStatusCode } from "axios";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { AuthService } from "../../services/auth.service";
import { TipoUsuario } from "../../enum/TipoUsuario";
import { Link } from "react-router-dom";

interface RotasRestauranteProtegidasProps {
  children: ReactNode
}

const NaoAutorizado = () => {
  return (
    <div className="bg-dark d-flex flex-column text-center">
      <h3 className="text-light">Você não tem autorização para acessar essa página!</h3>
      <Link to={'/'} className="btn btn-outline-info">Voltar ao início</Link>
    </div>
  )
}

const RotasRestauranteProtegidas:FunctionComponent<RotasRestauranteProtegidasProps> = ({children}) => {

  const [restauranteAutenticado, setRestauranteAutenticado] = useState<HttpStatusCode>()

  useEffect(() => {
    const verificarAutenticacaoRestaurante = async () => {
      let token = localStorage.getItem('token');
      if (!token) {
        console.log('nao tem autorizacao, ta sem token')
        setRestauranteAutenticado(HttpStatusCode.Unauthorized)
        return
      }

      // verificando se o token nao expirou
      const authServ = new AuthService()
      const resultado = await authServ.verificarEstadoUsuario(TipoUsuario.RESTAURANTE)
      setRestauranteAutenticado(resultado);
    }

    verificarAutenticacaoRestaurante()

  }, [])

  return (restauranteAutenticado === HttpStatusCode.Accepted)?children:<NaoAutorizado />
}

export default RotasRestauranteProtegidas;