import { styled } from 'styled-components'

export const Wrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.LIGHT.L100};
  font-family: Roboto;

  & input {
    display: flex;
    align-items: center;

    height: 3rem;
    width: 100%;

    font-size: 1rem;

    padding-inline: 0.875rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.DARK.D800};
  }
`
