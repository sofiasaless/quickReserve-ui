import './style.css'

// assets
import logo from '../../assets/material/reservationLogo.png';

const CadastroRestaurante = () => {
  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <img src={logo} className='text-center' style={{ width: '80px' }} />

        <div>
          <label className="form-label ms-1">Nome do estabelecimento</label>
          <input type="text" className="form-control" />
        </div>

        <div>
          <label className="form-label ms-1">E-mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>

        <div>
          <label className="form-label ms-1">CNPJ</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>

        <div style={{ width: '100%' }}>
          <label className="form-label ms-1">Categoria</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button className='btn-laranja-um'>Fazer cadastro</button>

          <button className='btn-outline-laranja py-2 px-4'>Entrar</button>
        </div>

        <div className='d-flex justify-content-center mt-2'>
          <button className='btn-outline-laranja py-2 px-4 text-decoration-underline fst-italic'>Sou um cliente</button>
        </div>
      </form>

    </div>
  )
}

export default CadastroRestaurante;