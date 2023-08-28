import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'
import { useState } from 'react'
import dish from '../../assets/dish.webp'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Amount, Wrap } from './styles'

export function Details() {
  const [count, setCount] = useState(1)
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(20 * count)

  function handleMinusCount() {
    if (count === 1) {
      return
    }
    setCount((prev) => prev - 1)
  }

  function handlePlusCount() {
    setCount((prev) => prev + 1)
  }

  return (
    <Wrap>
      <Button title={'Voltar'} isText hasIcon icon={CaretLeft} />
      <img src={dish} alt="Dish" />
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

      <section>
        <Tag title={'alface'} />
        <Tag title={'cebola'} />
        <Tag title={'pão naan'} />
        <Tag title={'pepino'} />
        <Tag title={'rabanete'} />
        <Tag title={'tomate'} />
      </section>

      <Amount>
        <div className="stepper">
          <Minus onClick={() => handleMinusCount()} />
          <span>{count}</span>
          <Plus onClick={() => handlePlusCount()} />
        </div>
        <Button title={`pedir ${price}`} hasIcon icon={Receipt} />
      </Amount>
    </Wrap>
  )
}
