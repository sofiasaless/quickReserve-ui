// assets
import capa from '../../assets/material/caparestaurante.jpg'

// componentes
import Container from '../../components/Container/Container'
import Titulos from '../../components/Titulos/Titulos'
import CardReserva from '../../components/CardReserva/CardReserva'
import ModalAcao from '../../components/ModalAcao/ModalAcao'
import ModalAlertaAcao from '../../components/ModalAlertaAcao/ModalAlertaAcao'

const InicioRestaurante = () => {

  return (
    <>
      <section
        className='container-capa '
        style={{
          backgroundImage: `url(${capa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='conteudo-capa d-flex align-items-center justify-content-center flex-column text-center'>
          <div className='container'>
            <h1 className='text-laranja-um fw-bold fst-italic'>Gerencie suas reservas com eficiência.</h1>
            <p className='weigth-semibold text-branco px-5 text-um mb-0'>Visualize, confirme ou cancele reservas em tempo real e mantenha seu restaurante sempre organizado.</p>
          </div>
        </div>
      </section>
      <Container>
        <Titulos titulo='Solicitações de reservas pendentes para hoje' subtitulo='Gerencie suas reservas para o dia de hoje' status={true} />

        <div className='d-flex justify-content-between align-items-center'>
          <button className='btn-outline py-1 px-5'>Data: 18 de março</button>

          <div className='d-flex gap-3'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label">
                  Pendentes
                </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label">
                  Confirmadas
                </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label">
                  Canceladas
                </label>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <CardReserva />
            </div>
            <div className="col">
              <CardReserva />
            </div>
            <div className="col">
              <CardReserva />
            </div>
            <div className="col">
              <CardReserva />
            </div>
            <div className="col">
              <CardReserva />
            </div>
            <div className="col">
              <CardReserva />
            </div>
          </div>
        </div>

        {/* <ModalAcao titulo='Detalhes da reserva'/> */}

        <ModalAlertaAcao titulo='Cancelar reserva' informacao='Tem certeza que deseja cancelar sua reserva? Você terá que solicitá-la novamente se quiser voltar a reservar.' />

      </Container >
    </>
  )
}

export default InicioRestaurante