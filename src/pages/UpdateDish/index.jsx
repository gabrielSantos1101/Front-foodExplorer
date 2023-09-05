import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Add } from '../../components/Add'
import { AlertDialog } from '../../components/Alert'
import { Button } from '../../components/Button'
import { CurrencyInput } from '../../components/CurrencyInput'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { useAuth } from '../../hooks/auth'
import { api, imageApi } from '../../services/api'
import { handleBack } from '../../utils/handleBack'
import { Wrapper } from './styles'

export function UpdateDish() {
  const { handleErrorFetchData } = useAuth()
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState([])
  const [ingredients, setIngredients] = useState([])

  function changeImage(image) {
    const previewURL = URL.createObjectURL(image)

    setImagePreview(previewURL)
    setImage(image)
  }

  function handleAddIngredient(newIngredient) {
    if (ingredients.includes(newIngredient)) {
      toast.info('Ingrediente duplicado')
      return
    }
    if (newIngredient === '') {
      toast.info('Ingrediente vazio')
      return
    }
    setIngredients((prev) => [...prev, newIngredient])
  }

  function handleRemove(value) {
    setIngredients((prev) => prev.filter((item) => item !== value))
  }

  async function handleDelete() {
    await api.delete(`/dishes/${params.id}`)
    toast.success('Prato deletado 🫡')
    handleBack(navigate)
  }

  async function handleSubmit() {
    if (
      !description ||
      !category ||
      !price ||
      !name ||
      ingredients.length === 0
    ) {
      toast.info('preencha todos os campos')
      return
    }
    const formData = new FormData()
    formData.append('photo', image)
    try {
      if (!formData.get('photo')) {
        await toast.promise(
          api.put(`/dishes/${params.id}`, {
            description,
            category,
            price,
            name,
            ingredients,
          }),
          {
            pending: 'Enviando dados...',
            success: {
              render() {
                handleBack(navigate)
                return 'Prato atualizado com sucesso 🙂'
              },
            },
            error: 'Erro ao atualizar prato',
          },
        )
      } else {
        await toast.promise(
          imageApi.post('', formData).then((res) =>
            api.put(`/dishes/${params.id}`, {
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
                return 'Prato atualizado com sucesso 🙂'
              },
            },
            error: 'Erro ao atualizar Prato',
          },
        )
      }
    } catch (err) {
      console.error(err)
      handleErrorFetchData(err)
    }
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)
        setCategory(response.data.dish.category)
        setName(response.data.dish.name)
        setDescription(response.data.dish.description)
        setPrice(response.data.dish.price)
        setImagePreview(response.data.dish.image)
        setIngredients(response.data.ingredients.map((item) => item.name))
      } catch (err) {
        console.error(err)
      }
    }
    getDish()
  }, [params.id])

  if (!data.dish) {
    return (
      <>
        <Loader />
      </>
    )
  }
  return (
    <Wrapper>
      <Button
        title={'Voltar'}
        isText
        hasIcon
        icon={CaretLeft}
        className="back"
        onClick={() => handleBack(navigate)}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Editar prato</h1>
        <div className="preview">
          {imagePreview.length > 0 && (
            <img src={imagePreview} alt={`image de ${name}`} />
          )}
        </div>
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
            <Select categoryName={category} changeValue={setCategory} />
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
            value={price}
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
          <AlertDialog onClick={handleDelete}>
            <Button title={'Excluir prato'} className="button" />
          </AlertDialog>
          <Button
            title={'Salvar alterações'}
            type={'submit'}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Wrapper>
  )
}
