import { Minus, Pencil, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { Amount, Heart, Wrap } from './styles'

export function Card({
  title,
  description,
  price,
  image,
  isAdmin = false,
  id,
}) {
  const [like, setLike] = useState(false)
  const navigate = useNavigate()
  const [count, setCount] = useState(1)
  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * count)

  function handleMenuOpen(open) {
    setLike(!like)
  }

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
    <Wrap $isAdmin={isAdmin}>
      {!isAdmin ? (
        <Heart>
          <input type="checkbox" onChange={handleMenuOpen} />
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
        <Pencil
          onClick={() => navigate(`/update/${id}`)}
          className="cardIcon"
        />
      )}
      <img
        src={image}
        alt="imagem macarons caindo junto de algumas frutas vermelhas"
        onClick={() => navigate(`/dish/${id}`)}
      />
      <div className="texts">
        <h2 onClick={() => navigate(`/dish/${id}`)}>{title}</h2>
        <p>{description}</p>
      </div>

      <Amount $isAdmin={isAdmin}>
        <span>{formatedPrice}</span>

        <div className="stepper">
          <Minus onClick={() => handleMinusCount()} />
          <span>{count}</span>
          <Plus onClick={() => handlePlusCount()} />
        </div>
        <Button title={'Adicionar'} />
      </Amount>
    </Wrap>
  )
}
