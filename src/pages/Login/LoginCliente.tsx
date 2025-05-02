import './style.css'

// componentes
import Logo from '../../components/Logo/Logo';

// imports
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../../services/auth.service';
import { FormLogin } from '../../types/FormLogin';
import { useState } from 'react';

const LoginCliente = () => {

  const { register, handleSubmit } = useForm<FormLogin>();

  const [processando, setProcessando] = useState<boolean>(false)
  const navegar = useNavigate()

  const onSubmitEntrar: SubmitHandler<FormLogin> = async (dadosCliente: FormLogin) => {

    setProcessando(true)

    const authService = new AuthService();
    try {
      await authService.entrarComoCliente(dadosCliente);
      console.log("Cliente logado com sucesso");

      navegar('/')
    } catch (error) {
      console.log("Erro ao logar com cliente:", error);
    }

    setProcessando(false)
  };

  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>

        <Logo />

        <div>
          <p className='fst-italic weigth-semibold'>Faça login como cliente para prosseguir!</p>
        </div>

        <div>
          <label className="form-label ms-1">E-mail</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("email", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("senha", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button disabled={processando} onClick={handleSubmit(onSubmitEntrar)} className='btn-laranja-um'>
            {processando ? (
              <span className="spinner-border spinner-border-sm mx-3" role="status" aria-hidden="true"></span>
            ) : (
              'Entrar'
            )}
          </button>

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