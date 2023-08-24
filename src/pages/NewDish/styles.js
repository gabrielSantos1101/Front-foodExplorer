import { styled } from 'styled-components'

export const Wrapper = styled.form`
  padding: 0.625rem 2rem;
  display: grid;
  gap: 1.5rem;

  & button:first-child {
    margin-top: 10px;
    font-size: 1rem;
  }

  & h1 {
    font-size: 1.8rem;
  }

  & select {
    all: unset;

    display: flex;
    align-items: center;

    cursor: pointer;
    box-sizing: border-box;

    width: 100%;
    height: 3rem;
    padding-inline: 1rem;
    margin-top: 1rem;

    font-size: 0.875rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.DARK.D900};

    &:focus {
      outline: 1px solid ${({ theme }) => theme.LIGHT.L300};
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

    & label {
      background-color: ${({ theme }) => theme.DARK.D800};
      padding: 0.4rem 0.5rem;
      border-radius: 8px;
    }
  }
`
