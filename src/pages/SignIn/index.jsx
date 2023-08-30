import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Form, Wrapper } from './styles'

export function SignIn() {
  return (
    <Wrapper>
      <Logo />

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
