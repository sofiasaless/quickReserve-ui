// assets
import imgMesa from '../../assets/material/meeting-room.png'
import { StatusReserva } from '../../enum/StatusReserva';
import { ReservaService } from '../../services/reserva.service';

import './style.css'
import { FunctionComponent, useEffect, useState } from "react";

interface CardMesaProps {
  mesaId: number;
  numeroMesa: number;
  lugares: number;
  dataDisponibilidade: string;
}

const CardMesa:FunctionComponent<CardMesaProps> = ({mesaId, numeroMesa, lugares, dataDisponibilidade}) => {
  
  const [disponibilidade, setDisponibilidade] = useState<boolean>(true);

  const verificarDisponibilidade = async () => {
    const reservService = new ReservaService();
    const dadosDeReserva = await reservService.buscarDisponibilidadeDeReservaDaMesa(mesaId, dataDisponibilidade);
    
    if (dadosDeReserva.statusReserva) {
      if (dadosDeReserva.statusReserva != StatusReserva.CANCELADA) {
        setDisponibilidade(false)
        return
      }
    }
    setDisponibilidade(true)
  }

  useEffect(() => {
    verificarDisponibilidade();
  }, [dataDisponibilidade])
  
  return (
    <div className={`${(disponibilidade)?'card-mesa':'card-mesa-indisponivel'} p-2 rounded-2 d-flex flex-column justify-content-center align-items-center`} onClick={() => verificarDisponibilidade()}>
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