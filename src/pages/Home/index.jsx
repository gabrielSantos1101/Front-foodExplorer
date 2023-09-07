// import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import macarons from '../../assets/macarons.webp'
import { Section } from '../../components/Section'
import { useSearch } from '../../hooks/search'
import { Wrapper } from './styles'

export function Home() {
  const { categories, meals, desserts, drinks } = useSearch()

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

      {!!meals.length && (
        <Section key={categories[0]} title={'Refeições'} data={meals} id="1" />
      )}
      {!!desserts.length && (
        <Section
          key={categories[1]}
          title={'Sobremesas'}
          data={desserts}
          id="2"
        />
      )}
      {!!drinks.length && (
        <Section key={categories[2]} title={'Bebidas'} data={drinks} id="3" />
      )}
    </Wrapper>
  )
}
