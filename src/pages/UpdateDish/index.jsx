import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { Wrapper } from './styles'

export function UpdateDish() {
  const [description, setDescription] = useState('Maracja batido')
  const [category, setCategory] = useState('Bebida')
  const [price, setPrice] = useState('55')
  const [name, setName] = useState('Suco de maracuja')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([
    'maracuja',
    'açucar',
    'água',
    'leite',
  ])

  function handleAddIngredient(newIngredient) {
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
          <label>
            <UploadSimple /> Selecione uma imagem
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
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
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type={'number'}
          value={price}
          required
        />
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
