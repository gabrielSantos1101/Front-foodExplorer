// import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/Skyblue'
import imageTeste from '../../assets/dish.webp'
import macarons from '../../assets/macarons.webp'
import { Card } from '../../components/Card'
import { Wrap, Wrapper } from './styles'

export function Home() {
  const isAdmin = false

  return (
    <Wrapper>
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
      <Wrap>
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
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
              />
            </SplideSlide>
          </Splide>
        </section>
        <section>
          <h2>Sobremesas</h2>
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
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
              />
            </SplideSlide>
          </Splide>
        </section>
        <section>
          <h2>Bebidas</h2>
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
            <SplideSlide>
              <Card
                title={'salada'}
                description={
                  'Salada com folhas verdes e molho agridoce salpicados com gergelim.Salada com folhas verdes e molho agridoce salpicados com gergelim.'
                }
                price={20.5}
                image={imageTeste}
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
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
                isAdmin={isAdmin}
                id={1}
              />
            </SplideSlide>
          </Splide>
        </section>
      </Wrap>
    </Wrapper>
  )
}
