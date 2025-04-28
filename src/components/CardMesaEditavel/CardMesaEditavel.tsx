// assets
import imgMesa from '../../assets/material/meeting-room.png'

import './style.css'
import { FunctionComponent } from "react";

interface CardMesaEditavelProps {
  numeroMesa: number;
  disponibilidade: boolean;
  lugares: number;
}

const CardMesaEditavel:FunctionComponent<CardMesaEditavelProps> = ({numeroMesa, disponibilidade, lugares}) => {
  return (
    <div className='card-mesa p-2 rounded-2 d-flex flex-column justify-content-center align-items-center'>
      <h4 className='m-0 mb-1'>{numeroMesa}</h4>
      <img src={imgMesa} 
        style={{
          width: '80px',
          objectFit: 'cover',
          opacity: disponibilidade ? 1 : 0.5,
        }}
        className='mb-2'
      />
      <span className='text-center'>{lugares} lugares</span>
    </div>
  )
}

export default CardMesaEditavel