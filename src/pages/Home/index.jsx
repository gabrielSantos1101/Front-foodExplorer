import { useEffect, useState } from 'react'
import macarons from '../../assets/macarons.webp'
import { LoadSection } from '../../components/LoadSection'
import { Section } from '../../components/Section'
import { useAuth } from '../../hooks/auth'
import { useSearch } from '../../hooks/search'
import { api } from '../../services/api'
import { Wrapper } from './styles'

export function Home() {
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  const { searchQuery } = useSearch()
  const { token, signOut } = useAuth()
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDishs() {
      try {
        if (token) {
          const favResponse = await api.get('/favorites')

          if (favResponse.data.length) {
            const favorites = favResponse.data.map((item) => item.id)
            setFavorites(favorites)
          }
        }
        const response = await api.get(`/dishes?search=${searchQuery}`)

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
        if (err.response.status) {
          signOut()
        }
      } finally {
        setLoading(false)
      }
    }
    getDishs()
  }, [searchQuery, signOut, token])

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

      {meals && !loading ? (
        <Section
          key={categories[0]}
          title={'Refeições'}
          data={meals}
          id="1"
          favId={favorites}
        />
      ) : (
        <LoadSection />
      )}
      {desserts && !loading ? (
        <Section
          key={categories[1]}
          title={'Sobremesas'}
          data={desserts}
          id="2"
          favId={favorites}
        />
      ) : (
        <LoadSection />
      )}
      {drinks && !loading ? (
        <Section
          key={categories[2]}
          title={'Bebidas'}
          data={drinks}
          id="3"
          favId={favorites}
        />
      ) : (
        <LoadSection />
      )}
    </Wrapper>
  )
}
