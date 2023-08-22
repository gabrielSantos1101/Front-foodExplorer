import { styled } from 'styled-components'

export const Wrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.LIGHT.L100};

  & input {
    background-color: ${({ theme }) => theme.DARK.D900};
    padding: 0.75rem 0.875rem;
    border-radius: 0.5rem;

    width: 100%;
  }
`
