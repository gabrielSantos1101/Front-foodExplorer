import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;

  margin-bottom: 4.5rem;

  & img {
    margin-top: -5px;
  }

  & div {
    display: flex;
    flex-direction: column;
    line-height: 110%;

    & span {
      align-self: flex-end;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`
