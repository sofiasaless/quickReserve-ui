// assets
import restaurante from '../../assets/material/restaurant.png';
import paraPessoas from '../../assets/material/multiple-users-silhouette-color.png';

import { FunctionComponent, useState } from 'react';

import './style.css';

interface ModalAlertaAcaoProps {
  titulo: string;
  reserva?: Reserva;
  icone?: string;
}

type Reserva = {
  id: number;
  nomeCliente: string;
  dataReserva: string;
  status: Status;
}

enum Status {
  PENDENTE = 'Pendente',
  CONFIRMADA = 'Confirmada',
  CANCELADA = 'Cancelada',
}

const ModalAlertaAcao: FunctionComponent<ModalAlertaAcaoProps> = ({ titulo }) => {

  const [aberto, setAberto] = useState<boolean>(false);

  const handleClose = () => {
    if (setAberto) {
      setAberto(!aberto);
    }
  };

  return (
    <div className="modal fade show" style={{ display: aberto ? "block" : "none" }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-acao-corpo modal-content shadow-lg rounded-4">

          <div className="modal-header">
            <button onClick={() => handleClose()} type="button" className="btn-close btn-close-black"></button>
          </div>

          <div className="modal-body d-flex flex-column align-items-center justify-content-center gap-4">
            <div>
              <h5 className="modal-title text-tres">{titulo}</h5>
              <p className="p-modal text-center">Reserva N° 19323 para mesa de <strong>n° 10</strong></p>
            </div>

            <div className='d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-2'>
                <img src={restaurante} alt=""
                  style={{ height: '60px' }}
                />
                <div className='d-flex flex-column'>
                  <span>Solicitada a</span>
                  <span className='text-uppercase fw-bold'>Tocando Restro</span>
                </div>
              </div>

              <div className='d-flex align-items-center gap-2'>
                <img src={paraPessoas} alt=""
                  style={{ height: '60px' }}
                />
                <span>Para 4 pessoas</span>
              </div>
            </div>

            <div className='modal-reserva-infos d-flex flex-column gap-3'>
              <div className='d-flex flex-column modal-reserva-infos gap-1'>
                <span style={{color: 'var(--laranja-dois)'}}>Data para reserva</span>
                <div className='div-infos p-2 rounded-2'>
                  <span className='text-white'>18 de março de 2024, quarta-feira às 18h</span>
                </div>
              </div>

              <div className='d-flex flex-column modal-reserva-infos gap-1'>
                <span style={{color: 'var(--laranja-dois)'}}>Observações</span>
                <div className='div-infos p-2 rounded-2'>
                  <span className='text-white'>18 de março de 2024, quarta-feira às 18h</span>
                </div>
              </div>
            </div>

            <div className='d-flex modal-reserva-infos justify-content-between'>
              <button className='px-4 rounded-5 btn-vermelho'>Recusar</button>
              <button className='px-4 rounded-5 btn-azul'>Confirmar</button>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default ModalAlertaAcao;