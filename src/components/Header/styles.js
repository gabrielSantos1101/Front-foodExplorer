import { styled } from 'styled-components'

export const Wrap = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.DARK.D700};
  padding-block: 1.75rem;

  & div {
    margin-bottom: 0;
  }

  & .order {
    position: relative;

    background: none;
    border: none;

    & span {
      position: absolute;
      display: grid;
      place-items: center;

      width: 18px;
      height: 18px;

      top: -3px;
      right: -3px;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 999999px;
    }
  }
`

export const Menu = styled.label`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;

    transition:
      stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`
