import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.DARK.D600};
  padding: 1.5rem 0.75rem;

  & div {
    margin-bottom: 0;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.LIGHT.L700};

    & img {
      width: clamp(1.125rem, 0.9653rem + 0.5941vw, 1.5rem);
      filter: grayscale(1);
    }
  }
`
