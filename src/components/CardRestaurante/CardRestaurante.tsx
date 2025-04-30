import './style.css'

// assets
import imgCapaTemplate from '../../assets/material/imageTemplate.png'
import imgIconeTemplate from '../../assets/material/imageIconeTemplate.png'

import { FunctionComponent } from "react";
import { Link } from 'react-router-dom';

interface CardRestauranteProps {
  nome: string;
  tipo: string;
  icone?: string;
  capa?: string;
}

const CardRestaurante: FunctionComponent<CardRestauranteProps> = ({ nome, tipo }) => {
  return (
    <div className="d-flex flex-column">
      <div className="img-capa-div d-flex justify-content-center align-items-center">
        <img className='img-capa rounded-2' src={imgCapaTemplate} alt="" />
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center p-3">

        <div className="d-flex flex-row align-items-center gap-2">
          <img src={imgIconeTemplate} className='img-logo-card rounded-circle' alt="" />
          <div className="d-flex flex-column">
            <span className='fw-bolder'>{nome}</span>
            <span>{tipo}</span>
          </div>
        </div>

        <div>
          <Link to={'/fazer-reserva'} className='text-decoration-none btn-outline-laranja-um px-3 py-1'>Fazer reserva</Link>
        </div>

      </div>
    
    </div>
  );
}

export default CardRestaurante;