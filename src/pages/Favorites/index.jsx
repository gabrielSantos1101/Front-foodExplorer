import { useNavigate } from 'react-router-dom'
import { SimpleCard } from '../../components/SimpleCard'
import { useFavorites } from '../../hooks/favorites'
import { handleBack } from '../../utils/handleBack'
import { Wrap, Wrapper } from './styles'

export function Favorites() {
  const { favorites } = useFavorites()
  const navigate = useNavigate()

  return (
    <Wrapper>
      <h1 onClick={() => handleBack(navigate)} title="voltar">
        {'<'} Meus favoritos
      </h1>

      <Wrap>
        {!!favorites.length &&
          favorites.map((favorite) => (
            <SimpleCard key={favorite.id} item={favorite} />
          ))}
      </Wrap>
    </Wrapper>
  )
}
