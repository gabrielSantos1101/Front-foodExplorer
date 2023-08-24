import { styled } from 'styled-components'

export const Wrap = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  font-size: 0.875rem;
  padding: 0.3125rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.DARK.D1000};

  & svg {
    cursor: pointer;
  }
`
