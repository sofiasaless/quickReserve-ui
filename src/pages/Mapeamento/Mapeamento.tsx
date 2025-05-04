// assets
import capa from '../../assets/material/caparestaurante.jpg'

// componentes
import Container from '../../components/Container/Container'
import Titulos from '../../components/Titulos/Titulos'
import CardMesa from '../../components/CardMesa/CardMesa'

const Mapeamento = () => {

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
        <Titulos titulo='Mapeamento de mesas para hoje' subtitulo='Visualize a situação de mesas para determinados horários'/>

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
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-4">
            {/* <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={true} lugares={4} />
            </div>
            <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={false} lugares={4} />
            </div>
            <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={true} lugares={4} />
            </div>
            <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={true} lugares={4} />
            </div>
            <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={false} lugares={4} />
            </div>
            <div className="col">
              <CardMesa numeroMesa={10} disponibilidade={true} lugares={4} />
            </div> */}
          </div>
        </div>

      </Container >
    </>
  )
}

export default Mapeamento