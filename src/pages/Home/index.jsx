import macarons from '../../assets/macarons.webp'
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
      </Wrap>
    </Wrapper>
  )
}
