import iconeTemplate from '../../assets/material/imageIconeTemplate.png'
import iconePessoas from '../../assets/material/multiple-users-silhouette.png'

const CardReservaCliente = () => {
  return (
    <div className="d-flex flex-column bg-white rounded-3 shadow-sm p-3">

      <div className="d-flex flex-column text-center justify-content-center align-items-center">
        <img
          src={iconeTemplate} alt=""
          style={{
            width: '50px',
            height: '50px',
          }}
          className='rounded-circle'
        />
        <span>Forno e Brasa</span>
        <span className="text-zero fst-italic">Pizzaria</span>
      </div>

      <hr />

      <div className="d-flex flex-column text-center justify-content-center align-items-center">
        <span className='text-zero fst-italic'>Reserva para quinta-feira, 04 de março de 2025</span>

        <div className='d-flex flex-row justify-content-center align-items-center gap-2 mt-2'>
          <img
            src={iconePessoas} alt=""
            style={{
              width: '25px',
              height: '25px',
            }}
          />
          <span className='text-zero'>4 pessoas</span>
        </div>
      </div>

    </div>
  );
}

export default CardReservaCliente;