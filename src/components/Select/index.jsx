import { CaretLeft, Check } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectViewport,
} from './styles'

export function Select({ changeValue, categoryName, ...rest }) {
  return (
    <SelectPrimitive.Root
      className="SelectRoot"
      defaultValue={categoryName}
      onValueChange={(e) => changeValue(e)}
    >
      <SelectTrigger>
        <SelectPrimitive.Value placeholder="Selecione" value="Selecione" />
        <SelectIcon>
          <CaretLeft />
        </SelectIcon>
      </SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectContent side="bottom" sideOffset={4} position="popper">
          <SelectViewport>
            <SelectItem value="Refeição">
              <SelectPrimitive.ItemText>Refeição</SelectPrimitive.ItemText>
              <SelectItemIndicator>
                <Check />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="Sobremesa">
              <SelectPrimitive.ItemText>Sobremesa</SelectPrimitive.ItemText>
              <SelectItemIndicator>
                <Check />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="Bebida">
              <SelectPrimitive.ItemText>Bebida</SelectPrimitive.ItemText>
              <SelectItemIndicator>
                <Check />
              </SelectItemIndicator>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
