import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  & main {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding-inline: 2rem;

    & h1 {
      color: ${({ theme }) => theme.LIGHT.L300};
      font-size: clamp(1.375rem, 1.1089rem + 0.9901vw, 2rem);
      font-weight: 500;
      line-height: 140%;

      margin-bottom: 1.25rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.002);
      }
    }

    & .order {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-block: 2rem;

      & ul {
        display: flex;
        flex: 1;
        gap: 1.5rem;
        flex-direction: column;
        margin-top: 1rem;
      }

      & strong {
        margin-top: 1.25rem;
        color: ${({ theme }) => theme.LIGHT.L300};
        font-size: clamp(1.3rem, 1.002rem + 1.1089vw, 2rem);
        font-weight: 500;
        line-height: 160%;

        margin-bottom: 1.8rem;
      }

      & button:last-child:not(span + button) {
        max-width: 50%;
        align-self: flex-end;
        margin-top: 1.8rem;
      }
    }

    & .back-btn {
      margin-bottom: 1.875rem;
      display: flex;
      align-items: center;
      background: transparent;
      color: ${({ theme }) => theme.LIGHT.L300};
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 160%;
      margin-bottom: 1.0625rem;
    }

    & .payment {
      width: 100%;
      max-width: 50rem;
      margin-inline: auto;
      margin-top: 2rem;

      & button:first-of-type:not(button + button) {
        font-size: 1rem;
      }

      & h2 {
        margin-top: 2rem;
      }
    }

    & .payment-container {
      display: flex;
      flex-direction: column;
      margin-top: 1.5rem;

      border: 1px solid ${({ theme }) => theme.LIGHT.L600};
      border-radius: 8px 8px 5px 5px;
      overflow: hidden;
      min-height: 26rem;

      & .payment-methods {
        display: flex;

        & button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-family: Roboto;
          height: 5rem;
          background: transparent;
          width: 100%;

          &.active {
            background: ${({ theme }) => theme.DARK.D800};
          }

          & + button {
            border-left: 1px solid ${({ theme }) => theme.LIGHT.L600};
          }
        }
      }

      & .payment-info {
        display: flex;
        justify-content: center;
        align-items: center;

        flex: 1;
        border-top: 1px solid ${({ theme }) => theme.LIGHT.L600};
        padding: 2rem 1.625rem;

        & .credit-card {
          display: flex;
          flex-wrap: wrap;

          max-width: 50rem;
          gap: 2.3125rem;

          & label {
            flex: 1 0 45%;

            &:first-child {
              flex: 1 0 100%;
            }
          }
        }
      }
    }

    @media (${({ theme }) => theme.SCREENS.XL}) {
      width: 100%;
      padding-inline: 7.5rem;
    }
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  flex: 1;

  margin-top: 3rem;

  text-align: center;

  & img {
    width: 18.75rem;
  }

  & .text h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  & p {
    color: ${({ theme }) => theme.LIGHT.L400};
    font-size: 1.4rem;
    width: min(100%, 40rem);
    margin-inline: auto;

    & strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    & img {
      width: 25rem;
    }

    & .text h2 {
      font-size: 2.375rem;
      font-weight: 700;
    }

    & p {
      width: 50rem;
      font-size: 1.125rem;

      & strong {
        font-size: 1.125rem;
      }
    }

    & button {
      font-size: 0.875rem;
    }
  }
`
