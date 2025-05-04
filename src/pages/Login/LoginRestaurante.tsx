import './style.css'

// assets

// imports
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLogin } from '../../types/FormLogin';
import { AuthService } from '../../services/auth.service';
import Logo from '../../components/Logo/Logo';
import { useState } from 'react';

const LoginRestaurante = () => {

  const { register, handleSubmit } = useForm<FormLogin>()

  const navegar = useNavigate()
  const [processando, setProcessando] = useState<boolean>(false)

  const onSubmitEntrar: SubmitHandler<FormLogin> = async (dadosRestaurante: FormLogin) => {
    setProcessando(true)

    const authService = new AuthService();
    try {
      await authService.entrarComoRestaurante(dadosRestaurante);
      console.log('logado com sucesso')
      navegar('/inicio-restaurante')

    } catch (error) {
      console.log("Erro ao tentar fazer login como restaurante:", error);
    }

    setProcessando(false)

  };

  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <Logo />

        <div>
          <p className='fst-italic weigth-semibold'>Faça login como RESTAURANTE para prosseguir!</p>
        </div>

        <div style={{ width: '100%' }}>
          <label className="form-label ms-1">E-mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" {...register("email", { required: "Nome é obrigatório" })} />
        </div>

        <div style={{ width: '100%' }}>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("senha", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button onClick={handleSubmit(onSubmitEntrar)} className='btn-laranja-um px-3'>
            {processando ? (
              <span className="spinner-border spinner-border-sm mx-3" role="status" aria-hidden="true"></span>
            ) : (
              'Entrar'
            )}
          </button>

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