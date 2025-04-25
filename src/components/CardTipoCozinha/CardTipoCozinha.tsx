import './style.css'
import { FunctionComponent } from "react";

// assets
import imgCapaTemplate from '../../assets/material/imageTemplate.png'

interface CardTipoCozinhaProps {
  tipo: string;
}

const CardTipoCozinha: FunctionComponent<CardTipoCozinhaProps> = ({ tipo }) => {
  return (
    <div className="card bg-dark text-white border-0">
      <img src={imgCapaTemplate} className="card-img imgTipo-capa-div" alt="..."/>
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h5 className="card-title text-tres fst-italic">{tipo}</h5>
        </div>
    </div>
  );
}

export default CardTipoCozinha;