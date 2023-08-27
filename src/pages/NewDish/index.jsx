import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { Wrapper } from './styles'

export function NewDish() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([])

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

  return (
    <Wrapper>
      <Button
        title={'Voltar'}
        isText
        hasIcon
        icon={CaretLeft}
        className="back"
      />
      <form>
        <h1>Editar prato</h1>
        <fieldset className="wrap">
          <label htmlFor="image">
            Imagem do prato
            <div>
              <UploadSimple /> Selecione uma imagem
              <input
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
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
          <Button title={'Salvar'} type={'submit'} />
        </div>
      </form>
    </Wrapper>
  )
}
