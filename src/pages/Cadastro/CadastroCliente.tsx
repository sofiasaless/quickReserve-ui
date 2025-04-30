import './style.css'

// assets
import logo from '../../assets/material/reservationLogo.png';

// imports
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../types/Cliente';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CadastroCliente = () => {

  // useForm para dados nos inputs do formulario
  const { register, handleSubmit } = useForm<Cliente>()

  const [enviando, setEnviando] = useState<boolean>(false)

  const onSubmitCadastrar: SubmitHandler<Cliente> = async (dadosCliente: Cliente) => {
    setEnviando(true);

    const authService = new AuthService();
    try {
      const response = await authService.cadastrarCliente(dadosCliente);
      console.log("Cliente cadastrado com sucesso:", response);
    } catch (error) {
      console.log("Erro ao cadastrar cliente:", error);
    }

    setEnviando(false);
  };

  return (
    <div className='vh-100 area-auth d-flex justify-content-center align-items-center'>

      <form className='p-4 bg-white rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center'>
        <img src={logo} className='text-center' style={{ width: '80px' }} />

        <div>
          <label className="form-label ms-1">Nome completo</label>
          <input type="text" className="form-control" {...register("nome", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">E-mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("email", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">CPF</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("cpf", { required: "Nome é obrigatório" })} />
        </div>

        <div style={{ width: '100%' }}>
          <label className="form-label ms-1">Data de nascimento</label>
          <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("dataAniversario", { required: "Nome é obrigatório" })} />
        </div>

        <div>
          <label className="form-label ms-1">Senha</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" {...register("senha", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <button className='btn-laranja-um' onClick={handleSubmit(onSubmitCadastrar)} disabled={enviando}>
            {enviando ? (
              <span className="spinner-border spinner-border-sm mx-5" role="status" aria-hidden="true"></span>
            ) : (
              'Fazer cadastro'
            )}
          </button>

          <Link to={'/login-cliente'} className='text-decoration-none btn-outline-laranja py-2 px-4'>Entrar</Link>
        </div>

        <div className='d-flex justify-content-center mt-2'>
          <Link to={'/cadastro-restaurante'} className='text-decoration-none btn-outline-laranja py-2 px-4 text-decoration-underline fst-italic'>Sou um restaurante</Link>
        </div>


      </form>

    </div>
  )
}

export default CadastroCliente;