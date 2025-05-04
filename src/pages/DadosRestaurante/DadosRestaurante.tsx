import { useEffect, useState } from 'react'
import { Restaurante } from '../../types/Restaurante'
import { RestauranteService } from '../../services/restaurante.service'
import { dataApiParaDataExtensa } from '../../util/dates'

const DadosRestaurante = () => {

  const [perfilRestaurante, setPerfilRestaurante] = useState<Restaurante>()

  useEffect(() => {
    const buscarRestaurante = async () => {
      const restServ = new RestauranteService()
      const resultado = await restServ.getRestaurantePorToken()
      setPerfilRestaurante(resultado)
    }

    buscarRestaurante()
  }, [])

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex gap-2 align-items-center">
        <img
          src={perfilRestaurante?.imagemPerfil} alt=""
          style={{
            height: '70px',
            objectFit: 'cover'
          }}
          className='rounded-circle'
        />
        <div className="d-flex flex-column">
          <span className='text-um weigth-semibold text-uppercase'>{perfilRestaurante?.nome}</span>
          <span>Aqui estão os dados do seu estabelecimento.</span>
        </div>
      </div>

      <form className="area-dados-cliente d-flex flex-column gap-3">
        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Nome do estabelecimento</label>
          <input type="text" className='input-padrao' value={perfilRestaurante?.nome} disabled={true} />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>CNPJ</label>
          <input type="text" className='input-padrao' value={perfilRestaurante?.cnpj} disabled={true} />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>E-mail</label>
          <input type="text" className='input-padrao' value={perfilRestaurante?.email} disabled={true} />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Data de cadastro</label>
          <input type="text" className='input-padrao' value={`Cadastrado em ` + dataApiParaDataExtensa(perfilRestaurante?.criadoEm)} disabled={true} />
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