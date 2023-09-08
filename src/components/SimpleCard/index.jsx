import { Minus, Plus } from '@phosphor-icons/react'
import { useCart } from '../../hooks/cartContext'
import { useFavorites } from '../../hooks/favorites'
import { Button } from '../Button'
import { Wrap } from './styles'

export function SimpleCard({ item, cartItem = false, ...rest }) {
  const { addItem, removeItem } = useCart()
  const { removeFavorite } = useFavorites()

  const handleAdd = () => addItem(item)
  const handleRemove = () => removeItem(item.id)

  return (
    <Wrap {...rest} $redButtons={!!cartItem}>
      <img src={item.image} alt="imagem do prato" />

      <div>
        <h3>{item.name}</h3>
        <div className="buttons">
          {cartItem ? (
            <>
              <Button isText hasIcon icon={Minus} onClick={handleRemove} />
              <span>coount</span>
              <Button isText hasIcon icon={Plus} onClick={handleAdd} />
            </>
          ) : (
            <Button
              title={'remover'}
              isText
              onClick={() => removeFavorite(item.id)}
            />
          )}
        </div>
      </div>
    </Wrap>
  )
}
