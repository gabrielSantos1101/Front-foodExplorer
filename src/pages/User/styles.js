import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding: 2.5rem 2rem;
  position: relative;

  & h1 {
    font-size: clamp(1.5rem, 1.2871rem + 0.7921vw, 2rem);
    opacity: 0;
  }

  & .back {
    position: absolute;
    top: 2rem;
    font-size: clamp(1rem, 0.7871rem + 0.7921vw, 1.5rem);
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;

    & fieldset {
      display: grid;
      gap: 1.1875rem;
      width: 100%;

      & + fieldset {
        margin-top: 1.1875rem;
      }

      & .preview {
        display: grid;
        place-items: center;

        pointer-events: none;
        background: none;

        & img {
          width: clamp(9rem, 5.3812rem + 13.4653vw, 17.5rem);
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 99999px;

          &::selection {
            background: none;
          }
        }
      }

      & label:has(input[type='file']) {
        display: grid;
        height: fit-content;
        gap: 1rem;
        margin-bottom: 1rem;

        &:hover {
          & div {
            background: ${({ theme }) => theme.DARK.D900};
          }
        }

        & div {
          display: flex;
          align-items: center;
          height: 3rem;
          gap: 0.5rem;

          font-size: 1rem;
          padding: 0.75rem 1rem;
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

      &:nth-of-type(1) label:has(input[type='text']):not(label + label) {
        margin-bottom: 1rem;
      }
    }

    & button {
      margin-top: 1.5rem;
      background: ${({ theme }) => theme.DARK.D600};
    }
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    justify-content: center;

    & h1 {
      position: absolute;
      top: 3rem;
    }

    form {
      flex-direction: row;
      gap: clamp(2rem, 0.7228rem + 4.7525vw, 5rem);

      & fieldset {
        &:has(.preview) {
          width: 100%;
          max-width: 20rem;
          align-items: flex-end;
        }
      }

      & .right-side {
        display: grid;
        width: 100%;

        & .user-data {
          display: flex;
          gap: 2rem;
          align-items: center;
          width: 100%;

          margin-top: 1rem;

          & fieldset {
            margin: 0;
          }
        }
      }

      & button {
        width: fit-content;
        padding-right: 1.5rem;
        justify-self: flex-end;
      }
    }
  }
`
