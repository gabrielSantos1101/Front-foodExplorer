// import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/Skyblue'
import imageTeste from '../../assets/dish.webp'
import macarons from '../../assets/macarons.webp'
import { Card } from '../../components/Card'
import { Wrap, Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper>
      <Wrap>
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

        <section>
          <h2>Refeições</h2>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: false,
              width: '100%',
              focus: 'center',
              gap: '1rem',
              perPage: 'auto',
              pagination: false,
              trimSpaces: 'move',
            }}
          >
            {/* <div className="splide__arrows">
              <CaretLeft className="splide__arrow splide__arrow--prev" />
              <CaretRight className="splide__arrow splide__arrow--next" />
            </div> */}
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
              />
            </SplideSlide>
          </Splide>
        </section>
      </Wrap>
    </Wrapper>
  )
}
