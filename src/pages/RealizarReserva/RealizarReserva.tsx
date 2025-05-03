// assets
import imgInfoTemplate1 from '../../assets/material/store.png'
import imgInfoTemplate2 from '../../assets/material/clock.png'
import imgInfoTemplate3 from '../../assets/material/contact-mail.png'
import imgInfoTemplate4 from '../../assets/material/reservationLogo.png'
import imgIconeInfo from '../../assets/material/calendar.png'

import './style.css'

// components
import CardRestauranteInfos from '../../components/CardRestauranteInfos/CardRestauranteInfos'
import CardMesa from '../../components/CardMesa/CardMesa'
import ModalAlerta from '../../components/ModalAlerta/ModalAlerta'

// imports
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../types/Restaurante'
import { RestauranteService } from '../../services/restaurante.service'
import { Mesa } from '../../types/Mesa'
import { MesaService } from '../../services/mesa.service'
import { dataAtualJSON, dataJsonParaDataExtensa } from '../../util/dates'
import { Reserva } from '../../types/Reserva'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ReservaService } from '../../services/reserva.service'

const RealizarReserva = () => {

  const { restauranteId } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  const [mesas, setMesas] = useState<Mesa[]>()

  const [dataEscolhida, setDataEscolhida] = useState<string>(dataAtualJSON())
  const [mesaEscolhida, setMesaEscolhida] = useState<Mesa | null>(null)

  // controle de inputs para o form de realizar reserva
  const { register, handleSubmit } = useForm<Reserva>()

  const onSubmitSolicitarReserva: SubmitHandler<Reserva> = async (dadosReserva: Reserva) => {
    dadosReserva.dataParaReserva = dataEscolhida
    dadosReserva.mesaId = mesaEscolhida?.id

    try {
      const reservaServ = new ReservaService()
      await reservaServ.solicitarReserva(dadosReserva)

    } catch (error) {
      console.log('deu erro ao tentar solicitar a reserva ', error)
    }

  };

  useEffect(() => {
    const recuperarRestaurante = async () => {
      const restService = new RestauranteService()
      await restService.getRestaurantePorId(restauranteId).then((dadosRestaurante) => {
        setRestaurante(dadosRestaurante);
      });

      const mesaServ = new MesaService()
      await mesaServ.getMesaPorRestauranteId(restauranteId).then((dadosMesas) => {
        setMesas(dadosMesas)
      })
    }

    recuperarRestaurante()

  }, [restauranteId])

  return (
    <section className='container-reserva'>
      <section
        style={{
          backgroundImage: `url(${restaurante?.imagemCapa})`,
          backgroundPosition: 'center',
        }}
        className='container-capa'
      >
        <div className='conteudo-capa d-flex align-items-center justify-content-center flex-column text-center'>

        </div>
      </section>

      <section className='container-informacoes container p-5 rounded-top-4 d-flex gap-4 responsivo'>
        {/* informações padroes do estabelecimento */}
        <div className='d-flex flex-column gap-4 conteudo'>
          <div className='d-flex gap-3 align-items-center mb-5'>
            <img
              src={restaurante?.imagemPerfil}
              alt=""
              className='rounded-3'
              style={{
                width: '80px',
                objectFit: 'cover'
              }}
            />
            <div className='d-flex flex-column'>
              <span className='text-um weigth-semibold'>{restaurante?.nome}</span>
              <span className='fst-italic'>{restaurante?.tipoRestaurante?.charAt(0).concat(restaurante?.tipoRestaurante?.toLowerCase().slice(1))}</span>
            </div>
          </div>

          <CardRestauranteInfos
            titulo='Sobre'
            informacao={restaurante?.descricao}
            icone={imgInfoTemplate1}
          />

          <CardRestauranteInfos
            titulo='Horários'
            informacao='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            icone={imgInfoTemplate2}
          />

          <CardRestauranteInfos
            titulo='Contatos'
            informacao={restaurante?.email}
            icone={imgInfoTemplate3}
          />


        </div>

        {/* informações de mesas e form para realizar reserva */}
        <div className='d-flex flex-column gap-3 conteudo'>
          <CardRestauranteInfos
            titulo='Mesas disponíveis'
            informacao={
              `Disponíveis para ${dataJsonParaDataExtensa(dataEscolhida)}`
            }
            icone={imgInfoTemplate4}
          />

          <div className='d-flex flex-column gap-1'>
            <label className='ms-2'>Escolher data para reserva</label>
            <input type="date" className='btn-outline px-4 py-2' onChange={(e) => {
              setDataEscolhida(e.target.value)
            }} />
            {/* <button className='btn-outline px-4 py-2'>Escolher data e horário</button> */}
          </div>


          {/* mesas disponíveis para o restaurante */}
          <div className='mt-3'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

              {
                mesas?.map((mesa) => (
                  <div key={mesa.id} className="col">
                    <CardMesa
                      mesaObj={mesa}
                      dataDisponibilidade={dataEscolhida}
                      escolherMesa={(mesa) => setMesaEscolhida(mesa)}
                    />
                  </div>
                ))
              }

            </div>
          </div>

          <div
            className='flex-column gap-3'
            style={{
              display: (mesaEscolhida) ? 'flex' : 'none'
            }}
          >
            <div>
              <span className='text-um text-uppercase fst-italic'>Mesa de n° <strong>{mesaEscolhida?.numero}</strong> selecionada</span>

              <div className='d-flex gap-2 align-items-center'>
                <img
                  src={imgIconeInfo} alt=""
                  style={{
                    width: '25px',
                    objectFit: 'cover'
                  }}
                />
                <span>Reserva para {dataJsonParaDataExtensa(dataEscolhida)}</span>
              </div>
            </div>

            <form className='d-flex flex-column gap-3'>

              <div className='d-flex flex-column gap-1'>
                <label className='ms-2'>Nome completo</label>
                <input type="text" className='input-reserva' {...register("nomeParaReserva")}/>
              </div>

              <div className='d-flex flex-column gap-1'>
                <label className='ms-2'>N° de pessoas</label>
                <input type="number" className='input-reserva' {...register("quantidadePessoas", { valueAsNumber: true })} />
              </div>

              <div className='d-flex flex-column gap-1'>
                <label className='ms-2'>Observações</label>
                <textarea rows={3} className='input-reserva' placeholder='Alguma ocasião especial? Aniversário? Comemoração? Jantar romântico?' {...register("observacoes")} />
              </div>

            </form>

            <div className='d-flex justify-content-end mt-3'>
              <button className='w-full btn-laranja-dois' onClick={handleSubmit(onSubmitSolicitarReserva)}>Solicitar reserva</button>
            </div>
          </div>
        </div>
      </section>

      <ModalAlerta
        titulo='Reserva solicitada!'
        informacao='Acompanhe o andamento da sua reserva na seção “Minhas reservas” disponível no seu perfil.'
      />

    </section>
  )
}

export default RealizarReserva;