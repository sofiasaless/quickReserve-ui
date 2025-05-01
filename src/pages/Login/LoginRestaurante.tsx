import './style.css'

// assets
import logo from '../../assets/material/reservationLogo.png';

// imports
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLogin } from '../../types/FormLogin';
import { AuthService } from '../../services/auth.service';

const LoginRestaurante = () => {

  const { register, handleSubmit } = useForm<FormLogin>()

  const onSubmitEntrar: SubmitHandler<FormLogin> = async (dadosRestaurante: FormLogin) => {

    const authService = new AuthService();
    try {
      await authService.entrarComoRestaurante(dadosRestaurante);
    } catch (error) {
      console.log("Erro ao tentar fazer login como restaurante:", error);
    }

  };

  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <img src={logo} className='text-center' style={{ width: '80px' }} />

        <div>
          <label className="form-label ms-1">E-mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" {...register("email", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("senha", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button onClick={handleSubmit(onSubmitEntrar)} className='btn-laranja-um px-3'>Entrar</button>

          <Link to={'/cadastro-restaurante'} className='text-decoration-none btn-outline-laranja py-2 px-3'>Fazer cadastro</Link>
        </div>

        <div className='d-flex justify-content-center mt-2'>
          <Link to={'/login-cliente'} className='text-decoration-none btn-outline-laranja py-2 px-4 text-decoration-underline fst-italic'>Sou um cliente</Link>
        </div>
      </form>

    </div>
  )
}

export default LoginRestaurante;