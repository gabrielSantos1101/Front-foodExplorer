import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { CropImage } from '../../components/CropImage'
import { CurrencyInput } from '../../components/CurrencyInput'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { useAuth } from '../../hooks/auth'
import { api, imageApi } from '../../services/api'
import { handleBack } from '../../utils/handleBack'
import { Wrapper } from './styles'

export function NewDish() {
  const navigate = useNavigate()
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState([])
  const [ingredients, setIngredients] = useState([])
  const { isAdmin, handleErrorFetchData } = useAuth()

  function changeImage(file) {
    const previewURL = URL.createObjectURL(file)
    // console.log(convertToImage(file))

    setImagePreview(previewURL)
    setImage(file)
  }

  if (!isAdmin) {
    toast.info('Você não tem permissão')
    navigate('/')
  }

  async function handleSubmit() {
    if (
      !description ||
      !category ||
      !price ||
      !name ||
      !image ||
      ingredients.length === 0
    ) {
      toast.info('preencha todos os campos')
      return
    }
    const formData = new FormData()
    formData.append('photo', image)
    try {
      await toast.promise(
        imageApi.post('', formData).then((res) =>
          api.post('/dishes', {
            description,
            category,
            price,
            name,
            ingredients,
            image: res.data.url,
          }),
        ),
        {
          pending: 'Enviando dados...',
          success: {
            render() {
              handleBack(navigate)
              return 'Prato criado com sucesso 😎'
            },
          },
          error: 'Erro ao criar Prato',
        },
      )
    } catch (err) {
      console.error(err)
      handleErrorFetchData(err)
    }
  }

  function handleAddIngredient(newIngredient) {
    if (ingredients.includes(newIngredient)) {
      toast.error('Ingrediente duplicado')
      return
    }
    if (newIngredient === '') {
      toast.error('Ingrediente vazio')
      return
    }
    setIngredients((prev) => [...prev, newIngredient])
  }

  function handleRemove(value) {
    setIngredients((prev) => prev.filter((item) => item !== value))
  }

  return (
    <Wrapper>
      <Button
        title={'Voltar'}
        isText
        icon={CaretLeft}
        className="back"
        onClick={() => handleBack(navigate)}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Novo prato</h1>
        <div className="preview">
          {imagePreview.length > 0 && (
            <img src={imagePreview} alt="imagem do prato" />
          )}
        </div>
        {modalIsOpen && (
          <CropImage
            image={imagePreview}
            setImage={setImagePreview}
            setOpenModal={setModalIsOpen}
          />
        )}
        <fieldset className="wrap">
          <label htmlFor="image">
            Imagem do prato
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
          <Input
            label={'Nome'}
            placeholder={'Salada César'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label className="select">
            Categoria
            <Select changeValue={setCategory} />
          </label>
        </fieldset>
        <fieldset className="wrap">
          <div className="ingredients">
            <h4>Ingredients</h4>
            <section>
              <Add
                placeholder={'Adicionar'}
                onAddIngredient={handleAddIngredient}
              />
              {ingredients.map((ingredient, index) => (
                <Tag
                  key={String(index)}
                  title={ingredient}
                  hasIcon
                  onClick={() => handleRemove(ingredient)}
                />
              ))}
            </section>
          </div>
          <CurrencyInput
            label={'Preço'}
            placeholder={'R$ 00,00'}
            onValueChange={(value, _, values) => setPrice(values.float)}
            required
          />
        </fieldset>
        <Textarea
          placeholder={
            'Fale brevemente sobre o prato, seus ingredientes e composição'
          }
          setValue={setDescription}
          value={description}
          required
        />
        <div className="buttons">
          <Button title={'Salvar'} type={'submit'} onClick={handleSubmit} />
        </div>
      </form>
    </Wrapper>
  )
}
