import { useEffect, useState } from 'react'
import usericon from '../../assets/material/user-black.png'
import { Cliente } from '../../types/Cliente'
import { ClienteService } from '../../services/cliente.service'

const DadosCliente = () => {

  const [clientePerfil, setClientePerfil] = useState<Cliente>()

  // serviço de funções para o cliente
  const cliServ = new ClienteService()

  const handleExcluirConta = async () => {
    try {
      if (window.confirm('Tem certeza que deseja excluir sua conta?').valueOf()) {
        await cliServ.deletarCliente()
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const recuperarPerfilCliente = async () => {
      await cliServ.getClientePorToken().then((dadosCliente) => {
        setClientePerfil(dadosCliente)
      })
      .catch(error => {
        console.log('nao foi possível recuperar os dados do cliente', error)
      })
    }

    recuperarPerfilCliente()
  }, [])

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
          <span className='text-um weigth-semibold'>Olá, {clientePerfil?.nome.split(' ')[0]}</span>
          <span>Aqui estão seus dados!</span>
        </div>
      </div>

      <form className="area-dados-cliente d-flex flex-column gap-3">
        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Nome completo</label>
          <input type="text" disabled={true} className='input-padrao' value={clientePerfil?.nome}/>
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>CPF</label>
          <input type="text" disabled={true} className='input-padrao' value={clientePerfil?.cpf}/>
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>E-mail</label>
          <input type="text" disabled={true} className='input-padrao' value={clientePerfil?.email}/>
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Data de cadastro</label>
          <input type="text" disabled={true} className='input-padrao' value={(clientePerfil?.criadoEm)?new Date(clientePerfil.criadoEm).toLocaleDateString('pt-BR', { dateStyle: 'full' }):''}/>
        </div>

      </form>

      <div className='d-flex justify-content-between'>
        <button onClick={handleExcluirConta} className='btn-vermelho px-5 py-2'>Excluir conta</button>
        <button className='btn-verde px-5 py-2'>Editar</button>
      </div>

    </div>
  )
}

export default DadosCliente