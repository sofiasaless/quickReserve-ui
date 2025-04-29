import { FunctionComponent, useState } from 'react';

import './style.css';

interface ModalAlertaAcaoProps {
  titulo: string;
  informacao?: string;
}

const ModalAlertaAcao: FunctionComponent<ModalAlertaAcaoProps> = ({ titulo, informacao }) => {

  const [aberto, setAberto] = useState<boolean>(true);

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

          <div className="modal-body d-flex flex-column align-items-center justify-content-center text-center gap-4">
            <div>
              <h5 className="modal-title text-tres">{titulo}</h5>
              <p className="p-modal text-center">{informacao}</p>
            </div>

            <div className='d-flex modal-reserva-infos justify-content-end'>
              <button className='px-4 rounded-5 btn-vermelho'>Cancelar reserva</button>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default ModalAlertaAcao;