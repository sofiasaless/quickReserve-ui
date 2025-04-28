import usericon from '../../assets/material/restaurant.png'

const DadosRestaurante = () => {
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

      <form className="area-dados-cliente d-flex flex-column gap-3">
        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Nome completo</label>
          <input type="text" className='input-padrao' />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>CPF</label>
          <input type="text" className='input-padrao' />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>E-mail</label>
          <input type="text" className='input-padrao' />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Data de cadastro</label>
          <input type="text" className='input-padrao' />
        </div>

      </form>

      <div className='d-flex justify-content-between'>
        <button className='btn-vermelho px-5 py-2'>Excluir conta</button>
        <button className='btn-verde px-5 py-2'>Editar</button>
      </div>

    </div>
  )
}

export default DadosRestaurante