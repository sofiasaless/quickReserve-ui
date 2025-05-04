// assets
import imgMesa from '../../assets/material/meeting-room.png'
import { StatusReserva } from '../../enum/StatusReserva';
import { ReservaService } from '../../services/reserva.service';
import { Mesa } from '../../types/Mesa';

import './style.css'
import { FunctionComponent, useEffect, useState } from "react";

interface CardMesaProps {
  mesaObj: Mesa;
  dataDisponibilidade: string;
  escolherMesa: (mesa: Mesa | null) => void;
}

const CardMesa:FunctionComponent<CardMesaProps> = ({mesaObj, dataDisponibilidade, escolherMesa}) => {
  
  const [disponibilidade, setDisponibilidade] = useState<boolean>(true);

  const verificarDisponibilidade = async () => {
    escolherMesa(null);
    const reservService = new ReservaService();
    const dadosDeReserva = await reservService.buscarDisponibilidadeDeReservaDaMesa(mesaObj.id, dataDisponibilidade);
    
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
    <div className={`${(disponibilidade)?'card-mesa':'card-mesa-indisponivel'} p-2 rounded-2 d-flex flex-column justify-content-center align-items-center`}
      onClick={() => {
        if (disponibilidade) {
          escolherMesa(mesaObj)
        }
      }}
    >
      <h4 className='m-0 mb-1'>{mesaObj.numero}</h4>
      <img src={imgMesa} 
        style={{
          width: '80px',
          objectFit: 'cover',
          opacity: disponibilidade ? 1 : 0.5,
        }}
        className='mb-2'
      />
      <span className='text-center'>{mesaObj.capacidadePessoas} lugares</span>
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