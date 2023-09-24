import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { styled } from 'styled-components'

export const Wrap = styled.div`
  button {
    all: unset;
  }

  .IconButton {
    font-family: inherit;
    border-radius: 100%;
    width: 2.625rem;
    aspect-ratio: 1/1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.LIGHT.L100};
    box-shadow: 0 2px 10px black;
    cursor: pointer;

    & img {
      width: 2.625rem;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 100%;
    }

    &:hover {
      filter: brightness(1.2);
    }

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  & div:has(position) {
    z-index: 1;
  }
`

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator)`
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.DARK.D400};
  opacity: 0.4;
  margin: 0.3125rem;
`

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 5rem;
  background-color: ${({ theme }) => theme.LIGHT.L100};
  border-radius: 0.375rem;
  padding: 0.3125rem;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 1;

  & span:has(> svg) {
    fill: white;
  }

  &[data-side='top'] {
    animation-name: slideDownAndFade;
  }

  &[data-side='right'] {
    animation-name: slideLeftAndFade;
  }

  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  &[data-side='left'] {
    animation-name: slideRightAndFade;
  }
`

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.DARK.D100};
  border-radius: 0.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5625rem;
  position: relative;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:has(svg) {
    gap: 0.3125rem;
  }

  &:hover {
    background: ${({ theme }) => theme.LIGHT.L300};
  }
`

export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger)`
  font-size: 0.875rem;
  line-height: 1;
  color: violet;
  border-radius: 0.1875rem;
  display: flex;
  align-items: center;
  height: 1.5625rem;
  padding: 0 0.3125rem;
  position: relative;
  padding-left: 1.5625rem;
  user-select: none;
  outline: none;

  & button[data-state='open'] {
    background-color: lime;
    color: violet;
  }
`
