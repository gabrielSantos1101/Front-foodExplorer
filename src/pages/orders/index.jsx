import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QRcode from '../../assets/qrCode.svg'

import { CaretLeft, CreditCard, DiamondsFour } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SimpleCard } from '../../components/SimpleCard'
import { useCart } from '../../hooks/cart'
import { PriceFormater } from '../../utils/PriceFormater'
import { handleBack } from '../../utils/handleBack'
import { EmptyCart, Wrapper } from './styles'

export function Orders() {
  const { cart, getTotalPrice } = useCart()
  const navigate = useNavigate()

  const [proceededToPayment, setProceededToPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [cardnumber, setCardnumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [expireDate, setExpireDate] = useState('')

  const totalPrice = PriceFormater(getTotalPrice())

  function handleProceedToPayment() {
    setProceededToPayment(true)
  }

  function handlePayment() {
    if (!cardnumber || !cvc || !expireDate) {
      toast.info('Por favor, preencha os campos')
      return
    }

    toast.success('Pagamento efetuado com sucesso')
  }

  function handleMethodChange(method) {
    setPaymentMethod(method)
  }

  return (
    <Wrapper $proceededToPayment={!!proceededToPayment}>
      <main>
        {cart.length === 0 ? (
          <EmptyCart>
            <shopping-cart size={40} />

            <div className="text">
              <h2>Seu carrinho está vazio</h2>
              <p>
                Adicione pratos clicando no botão <strong>Adicionar</strong> na
                página de pratos.
              </p>
            </div>

            <Button title="Buscar pratos" onClick={() => navigate('/')} />
          </EmptyCart>
        ) : (
          <>
            {!proceededToPayment && (
              <div className="order">
                <Button isText />
                <h1 onClick={() => handleBack(navigate)}>{'<'} Meu pedido</h1>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id}>
                      <SimpleCard cartItem item={product} />
                    </li>
                  ))}
                </ul>
                <strong>Total: {totalPrice}</strong>

                <Button onClick={handleProceedToPayment} title="Avançar" />
              </div>
            )}

            <div className="payment">
              <Button
                isText
                title="Voltar"
                icon={CaretLeft}
                onClick={() => setProceededToPayment(false)}
              />
              <h2>Pagamento</h2>

              <div className="payment-container">
                <div className="payment-methods">
                  <button
                    className={paymentMethod === 'pix' ? 'active' : ''}
                    onClick={() => handleMethodChange('pix')}
                  >
                    <DiamondsFour size={30} />
                    <span>PIX</span>
                  </button>

                  <button
                    className={paymentMethod === 'credit' ? 'active' : ''}
                    onClick={() => handleMethodChange('credit')}
                  >
                    <CreditCard size={30} />
                    <span>Crédito</span>
                  </button>
                </div>

                <div className="payment-info">
                  {paymentMethod === 'pix' && (
                    <div className="pix">
                      <img src={QRcode} alt="QR Code" />
                    </div>
                  )}

                  {paymentMethod === 'credit' && (
                    <div className="credit-card">
                      <Input
                        type="text"
                        label="Número do cartão"
                        placeholder="0000 0000 0000 0000"
                        onChange={setCardnumber}
                      />

                      <Input
                        type="text"
                        label="Validade"
                        placeholder="04/25"
                        onChange={setExpireDate}
                      />

                      <Input
                        type="text"
                        label="CVC"
                        placeholder="404"
                        onChange={setCvc}
                      />

                      <Button
                        title="Finalizar pagamento"
                        onClick={handlePayment}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </Wrapper>
  )
}
