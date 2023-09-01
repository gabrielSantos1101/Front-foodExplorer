import { styled } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & bottom {
    margin-bottom: 4rem;
  }

  & div:first-child {
    font-size: clamp(1.5rem, 1.2871rem + 0.7921vw, 2rem);
  }

  & h1 {
    display: none;
    text-align: center;
    font-size: 2rem;
  }

  & div:has(form) {
    width: 100%;
    max-width: 20rem;
  }

  @media (${({ theme }) => theme.SCREENS.MD}) {
    flex-direction: row;
    justify-content: space-evenly;

    & h1 {
      display: initial;
    }

    & div:has(form) {
      width: 100%;
      max-width: 30rem;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  width: 100%;
  margin-bottom: 1.5rem;

  @media (${({ theme }) => theme.SCREENS.MD}) {
    background: ${({ theme }) => theme.DARK.D700};
    padding: 4rem;
  }
`
