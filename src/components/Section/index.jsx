import { CaretRight } from '@phosphor-icons/react'
import { Card } from '../Card'
import { Wrap } from './styles'

export function Section({ title, data, id }) {
  return (
    <Wrap>
      <h2>{title}</h2>
      <section className="splide" id={`splide${id}`} aria-label="Refeicoes">
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <CaretRight />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <CaretRight />
          </button>
        </div>
        <div className="splide__track">
          <ul className="splide__list">
            {data.map((dish) => (
              <li key={dish.id} className="splide__slide">
                <Card
                  key={dish.id}
                  title={dish.name}
                  description={dish.description}
                  price={dish.price}
                  image={dish.image}
                  id={dish.id}
                  date={dish.created_at}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Wrap>
  )
}
