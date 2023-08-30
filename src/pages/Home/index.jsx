import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { useEffect } from 'react'
import imageTeste from '../../assets/dish.webp'
import macarons from '../../assets/macarons.webp'
import { Card } from '../../components/Card'
import { Wrap, Wrapper } from './styles'

export function Home() {
  // garante que o slider não vai gibar porque a lib não atualizou a versão do react obs:"eu não usaria isso em produção ta 😁"
  useEffect(() => {
    new Splide('.splide', {
      focus: 'center',
      pagination: false,
      autoWidth: true,
    }).mount()
    new Splide('#splide2', {
      focus: 'center',
      pagination: false,
    }).mount()
    new Splide('#splide3', {
      focus: 'center',
      pagination: false,
    }).mount()
  }, [])

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
        <div className="carrossel1">
          <h2>Refeições</h2>
          <section className="splide" aria-label="Refeicoes">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="carrossel2">
          <h2>Sobremesas</h2>
          <section className="splide" id="splide2" aria-label="Sobremesas">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="carrosel3">
          <h2>Bebidas</h2>
          <section className="splide" id="splide3" aria-label="Bebidas">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
                <li className="splide__slide">
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
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Wrap>
    </Wrapper>
  )
}
