import logo from '../../assets/favicon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input/Input'
import { Form, Wrapper } from './styles'

export function SignIn() {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="Logo Food Explorer" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <Input
          type={'email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          label={'Email'}
        />
        <Input
          type={'password'}
          placeholder={'No mínimo 6 caracteres'}
          label={'Senha'}
        />

        <Button title="Entrar" />
        <Button title="Criar uma conta" isText isCenter />
      </Form>
    </Wrapper>
  )
}
