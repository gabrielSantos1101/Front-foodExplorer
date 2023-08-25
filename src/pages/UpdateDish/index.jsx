import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { Wrapper } from './styles'

export function UpdateDish() {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([
    'Tomate',
    'Cenoura',
    'Pepino',
  ])

  function handleAddIngredient(newIngredient) {
    setIngredients((prev) => [...prev, newIngredient])
  }

  function handleRemove(value) {
    setIngredients((prev) => prev.filter((item) => item !== value))
  }

  return (
    <Wrapper>
      <Button title={'Voltar'} isText hasIcon icon={CaretLeft} />
      <form>
        <h1>Novo prato</h1>
        <label>
          <UploadSimple /> Selecione uma imagem
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <Input
          label={'Nome'}
          placeholder={'Salada César'}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          Categoria
          <select
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option>Refeição</option>
            <option>Sobremesa</option>
            <option>Bebida</option>
          </select>
        </label>
        <fieldset>
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
        </fieldset>
        <Input
          label={'Preço'}
          placeholder={'R$ 00,00'}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Textarea
          placeholder={
            'Fale brevemente sobre o prato, seus ingredientes e composição'
          }
          setValue={setDescription}
          value={description}
        />
        <Button title={'Salvar'} />
      </form>
    </Wrapper>
  )
}
