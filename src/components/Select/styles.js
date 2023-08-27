import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from 'styled-components'

export const Wrap = styled.div`
  button {
    all: unset;
  }
`
export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3125rem;
  flex: 1;

  border-radius: 0.5rem;
  border: none;

  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.LIGHT.L100};

  padding: 0.941rem 0.9375rem;
  background-color: ${({ theme }) => theme.DARK.D800};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.LIGHT.L100};
  }
`

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.3125rem;
`

export const SelectContent = styled(SelectPrimitive.Content)`
  width: var(--radix-select-trigger-width);
  transform: translateY(-0.625rem);
  padding-top: 0.625rem;

  cursor: pointer;

  background-color: ${({ theme }) => theme.DARK.D800};
  border-radius: 0 0 0.5rem 0.5rem;

  &::before {
    content: '>';
    width: 0.9375rem;
    height: 1.875rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;

    font-family: 'Poppins', sans-serif;
    font-weight: 100;

    position: absolute;
    top: -2.2rem;
    right: 0.9375rem;

    transform: rotate(90deg);

    font-size: 1.5rem;

    background: ${({ theme }) => theme.DARK.D800};
  }
`

export const SelectItem = styled(SelectPrimitive.Item)`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;

  font-size: 0.8125rem;
  line-height: 1;
  border-radius: 0.1875rem;

  padding: 0.5rem 2.1875rem 0 1.5625rem;

  .SelectItem[data-disabled] {
    pointer-events: none;
  }

  .SelectItem[data-highlighted] {
    outline: none;
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &:hover {
    outline: none;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`
export const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 1.5625rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
export const SelectIcon = styled(SelectPrimitive.Icon)`
  color: ${({ theme }) => theme.LIGHT.L100};
`
