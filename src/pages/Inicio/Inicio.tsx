// assets
import capa from '../../assets/material/savory-mexican-food-composition.jpg'

// componentes
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa'
import Container from '../../components/Container/Container'
import Titulos from '../../components/Titulos/Titulos'
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../types/Restaurante'
import { RestauranteService } from '../../services/restaurante.service'

const Inicio = () => {

  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    const recuperarRestaurantes = async () => {
      const resService = new RestauranteService();
      await resService.getRestaurantes().then((res) => {
        setRestaurantes(res)
      })
      .catch(() => {
        // console.error("Erro ao buscar restaurantes:", error);

        // as vezes o erro acontece pelo armazenamento de um token expirado
        localStorage.removeItem('token')
        recuperarRestaurantes()
      })
    }

    recuperarRestaurantes()

  }, []);

  return (
    <>
      <section 
        className='container-capa'
        style={{
          backgroundImage: `url(${capa})`
        }}
      >
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

            {
              restaurantes.map((restaurante) => (
                <div className="col" key={restaurante.id}>
                  <CardRestaurante idRestaurante={restaurante.id} nome={restaurante.nome} tipo={restaurante.tipoRestaurante} icone={restaurante.imagemPerfil} capa={restaurante.imagemCapa}/>
                </div>
              ))
            }

          </div>
        </div>

      </Container>
    </>
  )
}

export default Inicio