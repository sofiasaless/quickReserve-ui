import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPadrao from "./pages/Layout/LayoutPadrao";
import Inicio from "./pages/Inicio/Inicio";
import TiposCozinha from "./pages/TiposCozinha/TiposCozinha";
import Reserva from "./pages/Reserva/Reserva";
import InicioRestaurante from "./pages/InicioRestaurante/InicioRestaurante";
import Mapeamento from "./pages/Mapeamento/Mapeamento";
import LayoutPerfil from "./pages/Layout/LayoutPerfil";
import DadosCliente from "./pages/DadosCliente/DadosCliente";
import ReservasCliente from "./pages/ReservasCliente/ReservasCliente";
import DadosRestaurante from "./pages/DadosRestaurante/DadosRestaurante";
import GerenciaMesas from "./pages/GerenciaMesas/GerenciaMesas";
import CadastroCliente from "./pages/Cadastro/CadastroCliente";
import LoginCliente from "./pages/Login/LoginCliente";
import LoginRestaurante from "./pages/Login/LoginRestaurante";
import CadastroRestaurante from "./pages/Cadastro/CadastroRestaurante";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas com layout padrao */}
        <Route element={<LayoutPadrao />} >
          <Route
            path="/"
            element={
              <Inicio />
            }
          />

          <Route
            path="/tipos-cozinha"
            element={
              <TiposCozinha />
            }
          />

          <Route
            path="/fazer-reserva/:restauranteId"
            element={
              <Reserva />
            }
          />

          {/* rotas do restaurante */}
          <Route
            path="/inicio-restaurante"
            element={
              <InicioRestaurante />
            }
          />

          <Route
            path="/mapeamento"
            element={
              <Mapeamento />
            }
          />

          {/* pagina com aba de informações sobre o usuário */}
          <Route element={<LayoutPerfil />}>
            <Route
              path="/dados-cliente"
              element={
                <DadosCliente />
              }
            />

            <Route
              path="/minhas-reservas"
              element={
                <ReservasCliente />
              }
            />

            <Route
              path="/dados-restaurante"
              element={
                <DadosRestaurante />
              }
            />

            <Route
              path="/minhas-mesas"
              element={
                <GerenciaMesas />
              }
            />
          </Route>
        </Route>

        <Route
          path="/cadastro-cliente"
          element={
            <CadastroCliente />
          }
        />

        <Route
          path="/cadastro-restaurante"
          element={
            <CadastroRestaurante />
          }
        />

        <Route
          path="/login-cliente"
          element={
            <LoginCliente />
          }
        />

        <Route
          path="/login-restaurante"
          element={
            <LoginRestaurante />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;