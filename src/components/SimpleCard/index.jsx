import { Minus, Plus } from '@phosphor-icons/react'
import { useCart } from '../../hooks/cartContext'
import { useFavorites } from '../../hooks/favorites'
import { PriceFormater } from '../../utils/PriceFormater'
import { Button } from '../Button'
import { Wrap } from './styles'

export function SimpleCard({ item, cartItem = false, ...rest }) {
  const { addItem, removeItem } = useCart()
  const { removeFavorite } = useFavorites()

  const handleAdd = () => addItem(item)
  const handleRemove = () => removeItem(item.id)

  return (
    <Wrap {...rest} $redButtons={!!cartItem}>
      <img src={item.image} alt="imagem do prato" width={80} height={80} />

      <div>
        <div className="texts">
          <h3>{item.name}</h3>
          <span>{PriceFormater(item.price)}</span>
        </div>
        <div className="buttons">
          {cartItem ? (
            <>
              <Button isText icon={Minus} onClick={handleRemove} />
              <span>{item.count}</span>
              <Button isText icon={Plus} onClick={handleAdd} />
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
