import iconePessoas from '../../assets/material/multiple-users-silhouette.png'

// imports
import { FunctionComponent, useEffect, useState } from 'react';
import { Reserva } from '../../types/Reserva';
import { dataJsonParaDataExtensa } from '../../util/dates';
import { Restaurante } from '../../types/Restaurante';
import { RestauranteService } from '../../services/restaurante.service';
import { maiusculaParaRegular } from '../../util/texts';

interface CardReservaClienteProps {
  reservaObj: Reserva
}

const CardReservaCliente: FunctionComponent<CardReservaClienteProps> = ({ reservaObj }) => {

  const [dadosRestaurante, setDadosRestaurante] = useState<Restaurante>()

  useEffect(() => {
    const buscarRestaurante = async () => {
      if (reservaObj.mesaId) {
        const restServ = new RestauranteService()
        const dados = await restServ.getRestaurantePorMesaId(reservaObj.mesaId)
        setDadosRestaurante(dados)
      }
    }

    buscarRestaurante()

  }, [reservaObj.mesaId])

  return (
    <div className="d-flex flex-column bg-white rounded-3 shadow-sm p-3">

      <div className="d-flex flex-column text-center justify-content-center align-items-center">
        <img
          src={dadosRestaurante?.imagemPerfil} alt=""
          style={{
            width: '50px',
            height: '50px',
          }}
          className='rounded-circle'
        />
        <span>{dadosRestaurante?.nome}</span>
        <span className="text-zero fst-italic">{maiusculaParaRegular(dadosRestaurante?.tipoRestaurante)}</span>
      </div>

      <hr />

      <div className="d-flex flex-column text-center justify-content-center align-items-center">
        <span className='text-zero fst-italic'>Reserva para {dataJsonParaDataExtensa(reservaObj.dataParaReserva)}</span>

        <div className='d-flex flex-row justify-content-center align-items-center gap-2 mt-2'>
          <img
            src={iconePessoas} alt=""
            style={{
              width: '25px',
              height: '25px',
            }}
          />
          <span className='text-zero'>Para {reservaObj.quantidadePessoas} pessoas</span>
        </div>
      </div>

    </div>
  );
}

export default CardReservaCliente;