import { styled } from 'styled-components'

export const Area = styled.textarea`
  width: 100%;
  min-height: 9.375rem;
  max-height: 25rem;

  border-radius: 0.625rem;
  border: none;
  background: ${({ theme }) => theme.DARK.D800};

  padding: 1.25rem;
  margin-top: 1rem;

  overflow-y: auto;
  resize: none;
`
