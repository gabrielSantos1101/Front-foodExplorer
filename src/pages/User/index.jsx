import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { CropImage } from '../../components/CropImage'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api, imageApi } from '../../services/api'
import { handleBack } from '../../utils/handleBack'
import { Wrapper } from './styles'

export function UserPage() {
  const { handleErrorFetchData } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [district, setDistrict] = useState('')
  const [adress, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()

  function changeImage(file) {
    const previewURL = URL.createObjectURL(file)

    setImagePreview(previewURL)
    setImage(file)
  }

  async function handleSubmit() {
    const jsonAddress = {
      cep,
      number,
      district,
      complement,
      street: adress,
    }

    if (!password) {
      toast.info('preencha a senha atual')
      return
    }

    try {
      if (image) {
        const formData = new FormData()
        formData.append('photo', image)

        await toast.promise(
          imageApi.post('', formData).then((res) => {
            api.put('/user', {
              name,
              email,
              password,
              address: jsonAddress,
              avatar: res.data.url,
            })
            localStorage.setItem('user', res.data.url)
          }),
          {
            pending: 'Enviando dados...',
            success: {
              render() {
                return 'usuario atualizado 😉'
              },
            },
            error: 'Erro ao atualizar usuario',
          },
        )
      } else {
        await toast.promise(
          api.put('/user', {
            name,
            email,
            password,
            address: jsonAddress,
          }),
          {
            pending: 'Enviando dados...',
            success: {
              render() {
                return 'usuario atualizado 😉'
              },
            },
            error: 'Erro ao atualizar usuario',
          },
        )
      }
    } catch (err) {
      console.error(err)
      handleErrorFetchData(err)
    }
  }

  useEffect(() => {
    async function getDishs() {
      try {
        const response = await api.get(`/user`)
        setName(response.data.name)
        setEmail(response.data.email)

        response.data.avatar && setImagePreview(response.data.avatar)

        const jsonAddress = JSON.parse(response.data.address)
        setCep(jsonAddress.cep)
        setNumber(jsonAddress.number)
        setDistrict(jsonAddress.district)
        setComplement(jsonAddress.complement)
        setAddress(jsonAddress.street)
      } catch (err) {
        console.log(err)
      }
    }

    getDishs()
  }, [])

  return (
    <Wrapper>
      <h1>Perfil</h1>
      <Button
        icon={CaretLeft}
        hasIcon
        title={'voltar'}
        isText
        className="back"
        onClick={() => handleBack(navigate)}
      />
      {modalIsOpen && (
        <CropImage
          image={imagePreview}
          setImage={setImagePreview}
          setOpenModal={setModalIsOpen}
        />
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <div className="preview">
            {imagePreview && (
              <img src={imagePreview} alt={`image de ${name}`} />
            )}
          </div>
          <label htmlFor="image">
            Imagem do perfil
            <div>
              <UploadSimple /> Selecione uma imagem
              <input
                id="image"
                type="file"
                onChange={(e) => {
                  changeImage(e.target.files[0])
                  setModalIsOpen(true)
                }}
                required
              />
            </div>
          </label>
        </fieldset>
        <div className="right-side">
          <fieldset>
            <Input
              label="Nome"
              placeholder={'Gabriel Santos'}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <div className="user-data">
            <fieldset>
              <Input
                label="CEP"
                placeholder={'12345000'}
                type="number"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <Input
                label="Número"
                placeholder={'182'}
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                label="Bairro"
                placeholder={'Saltinho'}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <Input
                label="Endereço"
                placeholder={'Rua pinheiro'}
                type="text"
                value={adress}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                label="Complemento"
                placeholder={'Próximo ao mercado'}
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
              <Input
                label="Senha"
                type={'password'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <Button
            className="submit"
            title={'Salvar alterações'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Wrapper>
  )
}
