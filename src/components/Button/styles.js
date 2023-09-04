import { styled } from 'styled-components'

export const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $hasicon }) => (!$hasicon ? '' : 'gap: 0.375rem;')};
  width: ${({ $istext }) => (!$istext ? '100%' : 'fit-content')};
  padding-inline: ${({ $istext }) => (!$istext ? '1rem' : 'none')};

  color: ${({ theme }) => theme.LIGHT.L100};
  background: ${({ theme, $istext }) =>
    !$istext ? theme.COLORS.TOMATO_200 : 'none'};

  transition: all 0.3s;

  &:hover {
    transform: scale(${({ $istext }) => ($istext ? '1.03' : '')});
  }

  height: ${({ $istext }) => (!$istext ? '3rem' : 'fit-content')};
  ${({ $iscenter }) => (!$iscenter ? '' : 'margin-inline: auto')};

  border-radius: 0.3125rem;
  border: none;
`
