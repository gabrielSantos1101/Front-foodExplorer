import { CaretLeft } from '@phosphor-icons/react'
import { Add } from '../../components/Add'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Wrapper } from './styles'

export function NewDish() {
  return (
    <Wrapper>
      <Button title={'Voltar'} isText hasIcon icon={CaretLeft} />
      <h1>Novo prato</h1>
      <Input label={'Nome'} placeholder={'Salada César'} />
      <label>
        Categoria
        <select
          onChange={(e) => {
            console.log(e.target.value)
          }}
        >
          <option>Refeição</option>
          <option>Sobremesa</option>
          <option>Bebida</option>
        </select>
      </label>
      <fieldset>
        <h4>Ingredients</h4>
        <label>
          <Add title={'Adicionar +'} />
        </label>
      </fieldset>
    </Wrapper>
  )
}
