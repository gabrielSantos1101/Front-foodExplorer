import { styled } from 'styled-components'

export const Wrap = styled.input`
  width: 103px;
  max-width: 300px;
  height: 2rem;

  padding-inline: 1rem;

  background: none;
  border: 2px dashed ${({ theme }) => theme.LIGHT.L500};
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-style: solid;
  }

  &::selection {
    background-color: #0d161b;
  }
`
