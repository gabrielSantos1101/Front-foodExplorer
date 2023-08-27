import { styled } from 'styled-components'

export const Wrapper = styled.div`
  & .back {
    margin-top: 0.625rem;
    margin-left: 1.8rem;
    font-size: 1rem;
  }

  & form {
    display: grid;
    gap: 1.5rem;
    padding: 0.625rem 2rem;
    padding-bottom: 3.4375rem;

    & h1 {
      font-size: 1.8rem;
    }

    & label input,
    textarea,
    button {
      &:hover {
        background-color: ${({ theme }) => theme.DARK.D900};
      }
    }

    & .wrap {
      display: flex;
      flex-direction: column;
      gap: inherit;

      & label:first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 1rem;
        padding: 12px 2rem;
        border-radius: 0.5rem;

        background: ${({ theme }) => theme.DARK.D800};

        & svg {
          font-size: 1.5rem;
        }

        & input {
          width: 0;
          height: 0;
        }
      }

      & .select {
        display: flex;
        flex-direction: column;
      }
    }

    & fieldset {
      display: flex;
      flex-direction: column;

      & h4 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }

      & section {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        background-color: ${({ theme }) => theme.DARK.D800};
        padding: 0.4rem 0.5rem;
        border-radius: 8px;

        & span {
          background: ${({ theme }) => theme.LIGHT.L600};
        }
      }
    }

    & textarea::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 1rem 1rem ${({ theme }) => theme.LIGHT.L600};
    }
  }
`
