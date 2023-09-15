import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { Tag } from '../../components/Tag'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { handleBack } from '../../utils/handleBack'
import { Amount, Wrap } from './styles'

export function Details() {
  const { handleErrorFetchData, token } = useAuth()
  const navigate = useNavigate()
  const dish = useParams()
  const [data, setData] = useState({})
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(0)

  const FormatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * count)

  function handleMinusCount() {
    if (count === 1) {
      return
    }
    setCount((prev) => prev - 1)
  }

  function handlePlusCount() {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${dish.id}`)
        setData(response.data)
        setPrice(response.data.dish.price)
      } catch (err) {
        console.error(err)
        handleErrorFetchData(err)
      }
    }

    getDish()
  }, [dish])

  if (!data.dish) {
    return (
      <>
        <Loader />
      </>
    )
  }
  return (
    <Wrap>
      <Button
        title={'Voltar'}
        isText
        hasIcon
        icon={CaretLeft}
        onClick={() => handleBack(navigate)}
      />
      <img src={`${data.dish.image}`} alt="Dish" />
      <div>
        <h1>{data.dish.name}</h1>
        <p>{data.dish.description}</p>
        <section>
          {data.ingredients.map((ingredient) => (
            <Tag key={ingredient.id} title={ingredient.name} />
          ))}
        </section>
        {token && (
          <Amount>
            <div className="stepper">
              <Minus onClick={() => handleMinusCount()} />
              <span>{count}</span>
              <Plus onClick={() => handlePlusCount()} />
            </div>
            <Button title={`pedir ${FormatedPrice}`} hasIcon icon={Receipt} />
          </Amount>
        )}
      </div>
    </Wrap>
  )
}
