import { Minus, Pencil, Plus } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cartContext'
import { useFavorites } from '../../hooks/favorites'
import { Button } from '../Button'
import { Amount, Heart, Wrap } from './styles'

export function Card({
  title,
  description,
  price,
  isFavorite,
  image,
  date,
  id,
}) {
  const [like, setLike] = useState(isFavorite)
  const navigate = useNavigate()
  const [count, setCount] = useState(1)
  const { isAdmin, token } = useAuth()
  const { addItem } = useCart()
  const { removeFavorite, addFavorite } = useFavorites()

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * count)

  const today = new Date()
  const createdDate = new Date(date)

  const diferencaEmMilissegundos = Math.abs(today - createdDate)
  const differenceInDays = Math.floor(
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24),
  )

  function handleSetLike() {
    setLike(!like)
    if (!like) {
      addFavorite(id)
      return
    }
    removeFavorite(id)
  }

  function handlePlusCount(e) {
    e.preventDefault()
    setCount((prev) => prev + 1)
  }

  function handleMinusCount(e) {
    e.preventDefault()
    if (count === 1) {
      return
    }
    setCount((prev) => prev - 1)
  }

  useEffect(() => {
    if (isFavorite) {
      setLike(isFavorite)
    }
  }, [isFavorite])

  // async function handleFavoriteAdd() {
  //   try {
  //     await api.post(`/favorites/${id}`)
  //   } catch (err) {
  //     toast.error(err)
  //   }
  // }

  // async function handleFavoriteRemove() {
  //   try {
  //     await api.delete(`/favorites/${id}`)
  //   } catch (err) {
  //     toast.error(err)
  //   }
  // }

  return (
    <Wrap $isAdmin={isAdmin} to={`/dish/${id}`} $noToken={token}>
      {isAdmin ? (
        <Pencil
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            navigate(`/update/${id}`)
          }}
          className="cardIcon"
        />
      ) : token ? (
        <Heart onClick={(e) => e.stopPropagation()}>
          <input type="checkbox" onChange={handleSetLike} checked={like} />
          <div className="checkmark">
            <svg viewBox="0 0 256 256">
              <rect fill="none" height="256" width="256"></rect>
              <path
                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                strokeWidth="20px"
                stroke="#FFF"
                fill="none"
              ></path>
            </svg>
          </div>
        </Heart>
      ) : (
        ''
      )}
      {differenceInDays <= 7 && <span className="isNew">NOVO</span>}
      <img
        src={image}
        alt="imagem macarons caindo junto de algumas frutas vermelhas"
      />
      <div className="texts">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <Amount $isAdmin={isAdmin}>
        <span>{formatedPrice}</span>

        {token && (
          <>
            <div className="stepper">
              <Minus onClick={(e) => handleMinusCount(e)} />
              <span>{count}</span>
              <Plus onClick={(e) => handlePlusCount(e)} />
            </div>
            <Button
              title={'Adicionar'}
              onClick={(e) => {
                e.preventDefault()
                addItem({ id, count, price, title, image })
              }}
            />
          </>
        )}
      </Amount>
    </Wrap>
  )
}
