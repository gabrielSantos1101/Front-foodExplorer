// import Splide from '@splidejs/splide'
import { Splide } from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { useEffect, useState } from 'react'
import macarons from '../../assets/macarons.webp'
import { Section } from '../../components/Section'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Wrapper } from './styles'

export function Home() {
  const { handleErrorFetchData } = useAuth()
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
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
      autoWidth: true,
    }).mount()
    new Splide('#splide3', {
      focus: 'left',
      pagination: false,
      autoWidth: true,
    }).mount()
  }, [meals, desserts, drinks])

  useEffect(() => {
    async function getDishs() {
      try {
        const response = await api.get('/dishes')

        // setCategories(await response.data.map((item) => item.category))
        setCategories(
          response.data.reduce((acc, item) => {
            if (!acc.includes(item.category)) {
              acc.push(item.category)
            }
            return acc
          }, []),
        )

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
        handleErrorFetchData(err)
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

      {meals && (
        <Section
          key={categories[0]}
          title={categories[0]}
          data={meals}
          id="1"
        />
      )}
      {desserts && (
        <Section
          key={categories[1]}
          title={categories[1]}
          data={desserts}
          id="2"
        />
      )}
      {drinks && (
        <Section
          key={categories[2]}
          title={categories[2]}
          data={drinks}
          id="3"
        />
      )}
    </Wrapper>
  )
}
