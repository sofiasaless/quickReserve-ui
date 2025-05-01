import { FunctionComponent } from "react";

interface CardRestauranteInfosProps {
  titulo: string;
  informacao?: string;
  icone?: string;
}

const CardRestauranteInfos: FunctionComponent<CardRestauranteInfosProps> = ({titulo, informacao, icone}) => {
  return (
    <div className="d-flex gap-3">
      <div>
        <img 
          src={icone} 
          alt="" 
          style={{ width: '40px' }}
        />
      </div>

      <div>
        <span className="fw-bold">{titulo}</span>
        <p className="pe-4 text-black">{informacao}</p>
      </div>
    </div>
  )
}

export default CardRestauranteInfos