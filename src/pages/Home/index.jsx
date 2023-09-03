import { CaretRight } from '@phosphor-icons/react'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { useEffect, useState } from 'react'
import macarons from '../../assets/macarons.webp'
import { Card } from '../../components/Card'
import { api } from '../../services/api'
import { Wrap, Wrapper } from './styles'

export function Home() {
  const [data, setData] = useState({})
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const [deserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  // garante que o slider não vai bugar porque a lib não atualizou a versão do react obs:"talvez eu não usaria isso em produção ta 😁"
  useEffect(() => {
    new Splide('#splide1', {
      focus: 'left',
      pagination: false,
      autoWidth: true,
    }).mount()
    new Splide('#splide2', {
      focus: 'left',
      pagination: false,
    }).mount()
    new Splide('#splide3', {
      focus: 'left',
      pagination: false,
    }).mount()
  }, [])

  useEffect(() => {
    async function getDishs() {
      try {
        const response = await api.get('/dishes')
        setData(response.data)

        setCategories(await response.data.map((item) => item.category))
        setMeals(
          await response.data.filter((item) => item.category === 'Refeição'),
        )
        setDesserts(
          await response.data.filter((item) => item.category === 'Sobremesa'),
        )
        setDrinks(
          await response.data.filter((item) => item.category === 'Bebida'),
        )
      } catch (err) {
        console.error(err)
      }
    }
    getDishs()
  }, [])

  return (
    <Wrapper>
      <hgroup>
        <img
          src={macarons}
          alt="imagem macarons caindo junto de algumas frutas vermelhas"
        />
        <div className="texts">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </hgroup>
      <Wrap>
        <div className="carrossel1">
          <h2>Refeições</h2>
          <section className="splide" id="splide1" aria-label="Refeicoes">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <CaretRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <CaretRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                {meals.map((dish) => (
                  <li key={dish.id} className="splide__slide">
                    <Card
                      key={dish.id}
                      title={dish.name}
                      description={dish.description}
                      price={dish.price}
                      image={dish.image}
                      id={dish.id}
                      date={dish.created_at}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="carrossel2">
          <h2>Sobremesas</h2>
          <section className="splide" id="splide2" aria-label="Sobremesas">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <CaretRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <CaretRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                {deserts.map((dish) => (
                  <li key={dish.id} className="splide__slide">
                    <Card
                      key={dish.id}
                      title={dish.name}
                      description={dish.description}
                      price={dish.price}
                      image={dish.image}
                      id={dish.id}
                      date={dish.created_at}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="carrosel3">
          <h2>Bebidas</h2>
          <section className="splide" id="splide3" aria-label="Bebidas">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <CaretRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <CaretRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                {drinks.map((dish) => (
                  <li key={dish.id} className="splide__slide">
                    <Card
                      key={dish.id}
                      title={dish.name}
                      description={dish.description}
                      price={dish.price}
                      image={dish.image}
                      id={dish.id}
                      date={dish.created_at}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </Wrap>
    </Wrapper>
  )
}
