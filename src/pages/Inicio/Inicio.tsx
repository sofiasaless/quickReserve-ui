import './style.css'

// componentes
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa'
import Container from '../../components/Container/Container'
import Titulos from '../../components/Titulos/Titulos'
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante'

const Inicio = () => {

  return (
    <>
      <section className='container-capa'>
        <div className='conteudo-capa d-flex align-items-center justify-content-center flex-column text-center'>
          <div className='container'>
            <h1 className='text-laranja-um fw-bold fst-italic'>Encontre, reserve e aproveite!</h1>
            <p className='weigth-semibold text-branco px-5 text-um'>O QuickReserve conecta você aos melhores restaurantes com praticidade e rapidez. Escolha seu lugar, faça sua reserva e tenha a melhor experiência sem preocupações!</p>
          </div>

          <div className='d-flex flex-row justify-content-center align-items-center gap-3 mt-4'>
            <BarraPesquisa />

            <button className='btn-laranja-um px-5'>Buscar</button>
          </div>
        </div>
      </section>
      <Container>
        <Titulos titulo='Restaurantes' subtitulo='Uma diversidade culinária para você' />

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
            <div className="col">
              <CardRestaurante nome='Fôrno' tipo='Pizzaria'/>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Inicio