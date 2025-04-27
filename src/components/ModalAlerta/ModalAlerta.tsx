// assets
import reservaOk from '../../assets/material/check.png';

import { FunctionComponent, useState } from 'react';
import './style.css';

interface ModalAlertaProps {
  titulo: string;
  informacao: string;
  icone?: string;
}

const ModalAlerta: FunctionComponent<ModalAlertaProps> = ({titulo, informacao}) => {

  const [aberto, setAberto] = useState<boolean>(false);

  const handleClose = () => {
    if (setAberto) {
      setAberto(!aberto);
    }
  };

  return (
    <div className="modal fade show" style={{ display: aberto? "block":"none"}} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-corpo modal-content shadow-lg rounded-4">
          
          <div className="modal-header">
            <button onClick={() => handleClose()} type="button" className="btn-close btn-close-white"></button>
          </div>

          <div className="modal-body d-flex flex-column align-items-center justify-content-center">
            <img 
              src={reservaOk} alt="" 
              style={{
                width: '100px',
                objectFit: 'cover',
              }}
              className='mb-3'
            />
            <h5 style={{color: 'white'}} className="modal-title text-tres">{titulo}</h5>
            <p style={{color: 'white'}} className="p-modal text-center">{informacao}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalAlerta;