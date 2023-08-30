import { styled } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;

  & .back {
    margin-top: clamp(1.875rem, 1.6089rem + 0.9901vw, 2.5rem);
    margin-left: 1.8rem;
    font-size: clamp(1rem, 0.7871rem + 0.7921vw, 1.5rem);
  }

  & form {
    display: grid;
    gap: 1.5rem;
    padding: 0.625rem 2rem;
    padding-bottom: 3.4375rem;

    & h1 {
      font-size: 1.8rem;
    }

    & .preview {
      display: grid;
      place-items: center;

      pointer-events: none;
      background: none;

      & img {
        width: 12.5rem;
        height: 12.5rem;
        object-fit: cover;
        border-radius: 99999px;
      }
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
      align-items: center;
      gap: inherit;

      & label:first-child {
        &:hover {
          & div {
            background: ${({ theme }) => theme.DARK.D900};
          }
        }

        & div {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          font-size: 1rem;
          padding: 0.75rem 2rem;
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
      }

      & label:nth-child(2),
      .select,
      label:first-child {
        width: 100%;
      }

      & .select {
        display: flex;
        flex-direction: column;
      }

      & .ingredients {
        width: 100%;
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

    & .buttons {
      display: flex;
      align-items: center;
      gap: 2rem;

      & button {
        margin: 0;
      }

      & button:first-child {
        background: ${({ theme }) => theme.DARK.D800};

        &:hover {
          background: ${({ theme }) => theme.DARK.D900};
        }
      }

      & button:last-child:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO_200};
      }
    }
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    & form {
      .wrap {
        flex-direction: row;
      }

      & label:first-child {
        width: 25%;
      }

      & label:nth-child(2) {
        width: 50%;
      }

      & .select {
        width: 30%;
      }
    }

    & .wrap:has(> .ingredients) {
      & .ingredients {
        width: 100%;
      }

      & label:nth-child(2) {
        width: 30%;
      }
    }

    .buttons {
      width: 30%;
      justify-self: flex-end;
    }
  }
`
