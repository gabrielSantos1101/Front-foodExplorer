import { SimpleCard } from '../../components/SimpleCard'
import { useFavorites } from '../../hooks/favorites'
import { Wrap, Wrapper } from './styles'

export function Favorites() {
  const { favorites } = useFavorites()

  return (
    <Wrapper>
      <h1>Meus favoritos</h1>

      <Wrap>
        {!!favorites.length &&
          favorites.map((favorite) => (
            <SimpleCard key={favorite.id} item={favorite} />
          ))}
      </Wrap>
    </Wrapper>
  )
}
