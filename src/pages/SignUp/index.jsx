import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { useAuth } from '../../hooks/auth'
import { Form, Wrapper } from './styles'

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signUp } = useAuth()

  async function handleSubmit() {
    if (password.length < 6) {
      toast.info('Senha muito curta')
      return
    }
    if (name && email && password) {
      await toast.promise(signUp({ name, email, password }), {
        pending: 'Criando usuário...',
        success: {
          render() {
            navigate('/')
            return 'Usuário criado com sucesso!'
          },
        },
        error: 'Erro ao criar usuário',
      })
      return
    }
    toast.info('preencher todos os campos')
  }

  return (
    <Wrapper>
      <Logo src={logo} />

      <div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Crie sua conta</h1>
          <Input
            type={'text'}
            placeholder={'Exemplo: Gabriel Santos'}
            label={'Seu nome'}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type={'email'}
            placeholder={'Exemplo: exemplo@exemplo.com.br'}
            label={'Email'}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type={'password'}
            placeholder={'No mínimo 6 caracteres'}
            label={'Senha'}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button title="Entrar" onClick={handleSubmit} />
        </Form>
        <Button
          title="Já tenho uma conta"
          isText
          isCenter
          onClick={() => navigate('/')}
        />
      </div>
    </Wrapper>
  )
}
