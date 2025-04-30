import './style.css'

import { FunctionComponent } from "react";
import { Link } from 'react-router-dom';

interface CardRestauranteProps {
  nome: string;
  tipo: string | undefined;
  icone?: string;
  capa?: string;
}

const CardRestaurante: FunctionComponent<CardRestauranteProps> = ({ nome, tipo, icone, capa }) => {
  return (
    <div className="d-flex flex-column">
      <div className="img-capa-div d-flex justify-content-center align-items-center">
        <img className='img-capa rounded-2' src={capa} alt="" />
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center py-3">

        <div className="d-flex flex-row align-items-center gap-2">
          <img src={icone} className='img-logo-card rounded-circle' alt="" />
          <div className="d-flex flex-column">
            <span className='fw-bolder lh-1'>{nome}</span>
            <span>{tipo?.charAt(0).concat(tipo?.toLowerCase().slice(1))}</span>
          </div>
        </div>

        <div>
          <Link to={'/fazer-reserva'} className='text-decoration-none btn-outline-laranja-um px-2 py-1'>Fazer reserva</Link>
        </div>

      </div>
    
    </div>
  );
}

export default CardRestaurante;