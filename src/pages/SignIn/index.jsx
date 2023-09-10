import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { Logo } from '../../components/Logo'
import { useAuth } from '../../hooks/auth'
import { Form, Wrapper } from './styles'

export function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, loading } = useAuth()

  function handleSignIn() {
    signIn({ email, password, navigate })
  }

  if (loading) return <Loader />

  return (
    <Wrapper>
      <Logo />

      <div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Faça login</h1>
          <Input
            type={'email'}
            placeholder={'email'}
            label={'Email'}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
          <Input
            type={'password'}
            placeholder={'senha'}
            label={'Senha'}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button title="Entrar" onClick={handleSignIn} />
        </Form>
        <Button
          title="Criar uma conta"
          isText
          isCenter
          onClick={() => navigate('/register')}
        />
      </div>
    </Wrapper>
  )
}
