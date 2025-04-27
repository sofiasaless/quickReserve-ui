// assets
import imgMesa from '../../assets/material/meeting-room.png'

import './style.css'
import { FunctionComponent } from "react";

interface CardMesaProps {
  numeroMesa: number;
  disponibilidade: boolean;
  lugares: number;
}

const CardMesa:FunctionComponent<CardMesaProps> = ({numeroMesa, disponibilidade, lugares}) => {
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
      <div className='d-flex align-items-center gap-2'>
        <div 
          style={{backgroundColor: `var(${disponibilidade?'--verde':'--vermelho'})`}}  className='disp-div rounded-circle' 
        />
        <span>{disponibilidade?'Disponível':'Reservada'}</span>
      </div>
    </div>
  )
}

export default CardMesa