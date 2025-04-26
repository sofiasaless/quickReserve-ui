// assets
import capaImagem from '../../assets/material/close-up-person-cooking.jpg'
import imgIconeTemplate from '../../assets/material/imageIconeTemplate.png'
import imgInfoTemplate1 from '../../assets/material/store.png'
import imgInfoTemplate2 from '../../assets/material/clock.png'
import imgInfoTemplate3 from '../../assets/material/contact-mail.png'
import imgInfoTemplate4 from '../../assets/material/reservationLogo.png'

// components
import CardRestauranteInfos from '../../components/CardRestauranteInfos/CardRestauranteInfos'

import './style.css'
import CardMesa from '../../components/CardMesa/CardMesa'

const Reserva = () => {
  return (
    <section className='container-reserva'>
      <section
        style={{
          backgroundImage: `url(${capaImagem})`,
          backgroundPosition: 'center',
        }}
        className='container-capa'
      >
        <div className='conteudo-capa d-flex align-items-center justify-content-center flex-column text-center'>

        </div>
      </section>

      <section className='container-informacoes container p-5 rounded-top-4 d-flex gap-4'>
        {/* informações padroes do estabelecimento */}
        <div className='d-flex flex-column gap-4 conteudo'>
          <div className='d-flex gap-3 align-items-center mb-5'>
            <img
              src={imgIconeTemplate}
              alt=""
              className='rounded-3'
              style={{
                width: '80px',
                objectFit: 'cover'
              }}
            />
            <div className='d-flex flex-column'>
              <span className='text-um weigth-semibold'>Forno e Brasa</span>
              <span className='fst-italic'>Pizzaria</span>
            </div>
          </div>

          <CardRestauranteInfos
            titulo='Sobre'
            informacao='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quisquam, eius, odit repellat praesentium quo cum nesciunt maiores, porro hic vel. Ipsa, dolore voluptatibus ea neque sint ratione molestias modi.'
            icone={imgInfoTemplate1}
          />

          <CardRestauranteInfos
            titulo='Horários'
            informacao='Lorem ipsum, dolor sit amet consectetur adipisicing elit..'
            icone={imgInfoTemplate2}
          />

          <CardRestauranteInfos
            titulo='Contatos'
            informacao='Lorem ipsum, dolor sit amet consectetur adipisicing elit..'
            icone={imgInfoTemplate3}
          />


        </div>

        {/* informações de mesas e form para realizar reserva */}
        <div className='d-flex flex-column gap-3 conteudo'>
          <CardRestauranteInfos
            titulo='Mesas disponíveis'
            informacao='Disponíveis para 18h'
            icone={imgInfoTemplate4}
          />

          <div className='d-flex gap-3'>
            <button className='btn-outline px-4 py-2'>Escolher horário</button>
            <button className='btn-outline px-4 py-2'>Escolher data</button>
          </div>


          {/* mesas disponíveis para o restaurante */}
          <div className='mt-3'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
              <div className="col">
                <CardMesa numeroMesa={10} lugares={4} disponibilidade={true} />
              </div>
            </div>
          </div>

          <form>

          </form>
        </div>
      </section>

    </section>
  )
}

export default Reserva;