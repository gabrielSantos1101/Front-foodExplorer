import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  & button {
    font-size: 1.3125rem;
    align-self: flex-start;
  }

  & img {
    width: 16.5rem;
    height: 16.5rem;

    margin-top: 1rem;
    border-radius: 99999px;
    pointer-events: none;
  }

  & h1 {
    font-size: 1.5rem;

    margin-top: 1rem;
  }

  & p {
    text-align: center;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  & section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 1.5rem;

    width: 100%;
    padding: 1rem;
  }
`
export const Amount = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  & button {
    font-size: 0.7rem;
  }

  & .stepper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    font-size: 1.375rem;

    & span {
      text-align: center;
      min-width: 30px;
    }
  }
`
