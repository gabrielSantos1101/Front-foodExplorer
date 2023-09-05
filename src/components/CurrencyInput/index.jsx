import CurrencyFormat from 'react-currency-input-field'
import { Wrap } from './styles'

export function CurrencyInput({
  placeholder,
  icon: Icon,
  label,
  onValueChange,
  ...rest
}) {
  return (
    <Wrap>
      {label}
      {Icon && <Icon />}
      <CurrencyFormat
        placeholder={placeholder}
        // value={value}
        onValueChange={onValueChange}
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        minLength={1}
        allowNegativeValue={false}
        decimalScale={2}
        {...rest}
      />
    </Wrap>
  )
}
