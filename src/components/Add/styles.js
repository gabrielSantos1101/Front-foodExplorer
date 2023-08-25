import { styled } from 'styled-components'

export const Wrap = styled.div`
  min-width: 110px;
  height: 2rem;
  position: relative;
  overflow-x: hidden;

  background: none;
  border: 2px dashed ${({ theme }) => theme.LIGHT.L300};
  border-radius: 0.5rem;

  & svg {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);

    width: 1rem;
    height: 1rem;

    border-radius: 50%;
    border: none;
    background: none;
  }

  & input {
    min-width: 100%;
    max-width: 300px;
    height: 100%;

    padding-inline: 1rem 1.5rem;
    border-radius: 0.625rem;

    background: none;

    transition: all 0.2s;

    &:focus {
      outline: none;
    }

    &::selection {
      background-color: #163a4d;
    }
  }

  &:focus {
    outline: none;
    border-style: solid;
  }
`
