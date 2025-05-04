// assets e componentes
import CardMesaEditavel from '../../components/CardMesaEditavel/CardMesaEditavel';

// imports
import { SubmitHandler, useForm } from 'react-hook-form';
import { Mesa } from '../../types/Mesa';
import { MesaService } from '../../services/mesa.service';
import { useEffect, useState } from 'react';
import { RestauranteService } from '../../services/restaurante.service';
import { Restaurante } from '../../types/Restaurante';

const GerenciaMesas = () => {

  const { register, handleSubmit } = useForm<Mesa>();

  const [perfilRestaurante, setPerfilRestaurante] = useState<Restaurante>()
  const [mesas, setMesas] = useState<Mesa[]>([])

  const mesaServ = new MesaService()

  const onSubmitAdicionar: SubmitHandler<Mesa> = async (dadosMesa: Mesa) => {
    await mesaServ.adicionarNovaMesa(dadosMesa);
  };

  useEffect(() => {
    const recuperarDadosRestaurante = async () => {
      const restServ = new RestauranteService()
      await restServ.getRestaurantePorToken().then(async (dados) => {
        setPerfilRestaurante(dados)

        await mesaServ.getMesaPorRestauranteId(dados?.id).then((dadosMesas) => {
          setMesas(dadosMesas)
          // console.log(dadosMesas)
        })
      })
    }

    recuperarDadosRestaurante()

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

      <span className='text-uppercase fw-bold text-um'>Adicionar nova mesa</span>

      <form className="area-dados-cliente d-flex flex-column gap-3">
        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Número da mesa</label>
          <input type="text" className='input-padrao' {...register("numero", { required: "Nome é obrigatório" })} />
        </div>

        <div className='d-flex flex-column gap-1'>
          <label className='ms-2'>Capacidade de pessoas</label>
          <input type="text" className='input-padrao' {...register("capacidadePessoas", { required: "Nome é obrigatório" })} />
        </div>

      </form>

      <div className='d-flex justify-content-end'>
        <button onClick={handleSubmit(onSubmitAdicionar)} className='btn-verde px-5 py-2'>Adicionar</button>
      </div>

      <span className='text-uppercase fw-bold text-um'>Editar/excluir mesas</span>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {
            mesas.map((mesa) => (
              <div key={mesa.id} className="col">
                <CardMesaEditavel disponibilidade={true} lugares={mesa.capacidadePessoas} numeroMesa={mesa.numero} />
              </div>
            ))
          }
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