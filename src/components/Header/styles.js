import { styled } from 'styled-components'

export const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.DARK.D700};
  padding: 1.75rem clamp(2rem, -1.703rem + 6.3366vw, 4rem);

  div {
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

      top: -0.1875rem;
      right: -0.1875rem;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 999999px;
    }
  }

  & label:has(.search) {
    display: none;
    flex: 1;
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    justify-content: space-evenly;
    label:has(.search) {
      display: initial;
      max-width: 56.25rem;
    }
  }
`

export const Menu = styled.div`
  ${({ $menuOpne }) => (!$menuOpne ? 'position: relative' : '')};
  width: 3rem;
  height: 3rem;

  .hamburger {
    cursor: pointer;
    position: absolute;
    ${({ $menuOpne }) => $menuOpne && 'left: 2rem'};
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

  @media (${({ theme }) => theme.SCREENS.LG}) {
    display: none;
  }
`

export const OpenMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
    top: 2.1875rem;
    left: 6rem;
  }

  & div:has(> button) {
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.DARK.D1000};
    padding-bottom: 0.625rem;

    & button {
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }

  & div:last-child:has(> button) {
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.DARK.D1000};
    padding-bottom: 0.625rem;

    & button:hover {
      color: #ff2335;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.DARK.D700};
  }
`
