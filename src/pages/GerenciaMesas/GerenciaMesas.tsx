import usericon from '../../assets/material/restaurant.png'
import CardMesaEditavel from '../../components/CardMesaEditavel/CardMesaEditavel';

const GerenciaMesas = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex gap-2 align-items-center">
        <img
          src={usericon} alt=""
          style={{
            height: '70px',
            objectFit: 'cover'
          }}
        />
        <div className="d-flex flex-column">
          <span className='text-um weigth-semibold text-uppercase'>Tocanto Restro</span>
          <span>Aqui estão os dados do seu estabelecimento.</span>
        </div>
      </div>

      <span className='text-uppercase fw-bold text-um'>Adicionar nova mesa</span>

      <form className="area-dados-cliente d-flex flex-column gap-3">
        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Número da mesa</label>
          <input type="text" className='input-padrao' />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Capacidade</label>
          <input type="text" className='input-padrao' />
        </div>

      </form>

      <div className='d-flex justify-content-end'>
        <button className='btn-verde px-5 py-2'>Adicionar</button>
      </div>

      <span className='text-uppercase fw-bold text-um'>Editar/excluir mesas</span>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          <div className="col">
            <CardMesaEditavel disponibilidade={true} lugares={4} numeroMesa={10} />
          </div>
          <div className="col">
            <CardMesaEditavel disponibilidade={true} lugares={4} numeroMesa={10} />
          </div>
          <div className="col">
            <CardMesaEditavel disponibilidade={true} lugares={4} numeroMesa={10} />
          </div>
          <div className="col">
            <CardMesaEditavel disponibilidade={true} lugares={4} numeroMesa={10} />
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <button className='btn-vermelho px-5 py-2'>Excluir mesa</button>
        <button className='btn-verde px-5 py-2'>Editar mesa</button>
      </div>

    </div>
  )
}

export default GerenciaMesas;