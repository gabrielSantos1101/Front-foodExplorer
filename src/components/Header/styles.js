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

      width: 1.125rem;
      height: 1.125rem;

      top: -3px;
      right: -3px;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 999999px;
    }
  }
`

export const Menu = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;

  .hamburger {
    cursor: pointer;
    position: absolute;
    z-index: 10;
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

export const OpenMenu = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;

  display: inherit;
  flex-direction: column;
  gap: 2rem;
  padding-inline: 1.75rem;

  width: 100%;
  height: 100%;

  padding-top: 9.1875rem;

  background: ${({ theme }) => theme.DARK.D400};

  & h1 {
    font-size: 1.3125rem;
    position: absolute;
    top: 35px;
    left: 110px;
  }

  & div:has(> button) {
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.DARK.D1000};
    padding-bottom: 0.625rem;

    & button {
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_200};
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.9375rem;
    background: ${({ theme }) => theme.DARK.D700};
  }
`
