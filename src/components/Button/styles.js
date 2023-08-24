import { styled } from 'styled-components'

export const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $hasicon }) => (!$hasicon ? '' : 'gap: 0.375rem;')};
  width: ${({ $istext }) => (!$istext ? '100%' : 'fit-content')};

  color: ${({ theme }) => theme.LIGHT.L100};
  background: ${({ theme, $istext }) =>
    !$istext ? theme.COLORS.TOMATO_100 : 'none'};

  padding: ${({ $istext }) => (!$istext ? '0.75rem 0.875rem' : '0')};
  ${({ $iscenter }) => (!$iscenter ? '' : 'margin-inline: auto')};

  border-radius: 0.3125rem;
  border: none;
`
