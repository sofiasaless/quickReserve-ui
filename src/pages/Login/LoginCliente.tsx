import './style.css'

// assets
import logo from '../../assets/material/reservationLogo.png';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Cliente } from '../../types/Cliente';
import { AuthService } from '../../services/auth.service';

const LoginCliente = () => {

  // const { register, handleSubmit } = useForm<Cliente>();

  const onSubmitLogin: SubmitHandler<Cliente> = async (dadosCliente: Cliente) => {

    const authService = new AuthService();
    try {
      const response = await authService.entrarComoCliente(dadosCliente);
      console.log("Cliente cadastrado com sucesso:", response);
    } catch (error) {
      console.log("Erro ao cadastrar cliente:", error);
    }

  };

  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <img src={logo} className='text-center' style={{ width: '80px' }} />

        <div>
          <label className="form-label ms-1">CPF</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button className='btn-laranja-um px-4'>Entrar</button>

          <Link to={'/cadastro-cliente'} className='text-decoration-none btn-outline-laranja py-2 px-3'>Fazer cadastro</Link>
        </div>

        <div className='d-flex justify-content-center mt-2'>
          <Link to={'/login-restaurante'} className='text-decoration-none btn-outline-laranja py-2 px-4 text-decoration-underline fst-italic'>Sou um restaurante</Link>
        </div>


      </form>

    </div>
  )
}

export default LoginCliente;