import './style.css'

// componentes
import Navbar from "../../components/Navbar/Navbar"
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa'

const Inicio = () => {

  return (
    <>
      <Navbar />
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
    </>
  )
}

export default Inicio