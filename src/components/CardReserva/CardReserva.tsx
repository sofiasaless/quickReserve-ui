import './style.css'
import { FunctionComponent } from "react";

// assets
import imgReservaTemplate from '../../assets/material/not-reserved.png'
import imgSolicitado from '../../assets/material/siluete.png'
import imgHorario from '../../assets/material/alarm-clock.png'
import imgPessoas from '../../assets/material/multiple-users-silhouette.png'

interface CardReservaProps {
}

const CardReserva: FunctionComponent<CardReservaProps> = () => {
  return (
    <div className="card rounded-4 card-reserva text-white border-0 p-3 d-flex flex-column justify-content-center gap-3">
        <div className='d-flex align-items-center justify-content-between gap-3'>
          <img src={imgReservaTemplate} 
            alt="" 
            style={
              {
                height: '60px',
              }
            }
            
          />
          <div className='d-flex flex-column'>
            <span className='text-dois text-black text-uppercase fw-bold'>Mesa 10</span>
            <span className='text-black'>Reserva para quarta-feira, 12 de fevereiro de 2025</span>
          </div>
        </div>

        <div className='d-flex gap-2 align-items-center justify-content-between'>
          <div className='d-flex gap-1 align-items-center'>
            <img src={imgSolicitado} alt="" 
              style={
                {
                  height: '25px',
                }
              }
            />
            <span className='text-zero text-black'>Solicitada por Sofia</span>
          </div>

          <div className='d-flex gap-1 align-items-center'>
            <img src={imgHorario} alt="" 
              style={
                {
                  height: '25px',
                }
              }
            />
            <span className='text-zero text-black'>Para 18:00h</span>
          </div>

          <div className='d-flex gap-1 align-items-center'>
            <img src={imgPessoas} alt="" 
              style={
                {
                  height: '25px',
                }
              }
            />
            <span className='text-zero text-black'>4 pessoas</span>
          </div>

        </div>
    </div>
  );
}

export default CardReserva;