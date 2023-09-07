import { styled } from 'styled-components'

export const Wrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem clamp(2rem, -1.2782rem + 12.198vw, 9.7rem);
  font-size: clamp(0.5rem, 0.3403rem + 0.5941vw, 0.875rem);
  background: ${({ theme }) => theme.DARK.D600};

  & h3 {
  }

  & div {
    margin-bottom: 0;

    font-size: inherit;
    color: ${({ theme }) => theme.LIGHT.L700};

    & img {
      width: clamp(1.125rem, 0.9653rem + 0.5941vw, 1.5rem);
      filter: grayscale(1);
    }
  }
`
