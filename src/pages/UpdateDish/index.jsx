import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Loader } from '../../components/Loader'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { Wrapper } from './styles'

export function UpdateDish() {
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
      toast.error('Ingrediente duplicado')
      return
    }
    if (newIngredient === '') {
      toast.error('Ingrediente vazio')
      return
    }
    setIngredients((prev) => [...prev, newIngredient])
    toast.success('Adicionado')
  }

  function handleRemove(value) {
    setIngredients((prev) => prev.filter((item) => item !== value))
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        console.log(response.data)
        setData(response.data)
        setCategory(response.data.dish.category)
        setName(response.data.dish.name)
        setDescription(response.data.dish.description)
        setPrice(response.data.dish.price)
        setImagePreview(response.data.dish.image)
        setIngredients(
          response.data.ingredients.map((item) => setIngredients(item.name)),
        )
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
        onClick={() => navigate(-1)}
      />
      <form>
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
          <Input
            label={'Preço'}
            placeholder={'R$ 00,00'}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            type={'number'}
            value={price}
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
          <Button title={'Excluir prato'} />
          <Button title={'Salvar alterações'} type={'submit'} />
        </div>
      </form>
    </Wrapper>
  )
}
