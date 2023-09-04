import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { styled } from 'styled-components'

export const Wrap = styled.div`
  width: 100%;

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const Button = styled.button`
  all: unset;
  cursor: pointer;

  &:first-of-type:hover {
    color: ${({ theme }) => theme.COLORS.PERSIMMON_400};
  }
`

export const AlertDialogOverlay = styled(AlertDialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  position: fixed;
  inset: 0;
`

export const AlertDialogContent = styled(AlertDialogPrimitive.Content)`
  background-color: ${({ theme }) => theme.DARK.D900};
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 0.625rem 2.375rem -0.625rem,
    hsl(206 22% 7% / 20%) 0px 0.625rem 1.25rem -0.9375rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 31.25rem;
  max-height: 85vh;
  padding: 1.5625rem;
  &:focus {
    outline: none;
  }
`

export const AlertDialogTitle = styled(AlertDialogPrimitive.Title)`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
`

export const AlertDialogDescription = styled(AlertDialogPrimitive.Description)`
  margin-top: 0.625rem;
  margin-bottom: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
`
