import { styled } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding-bottom: 3.125rem;

  & hgroup {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: clamp(9.375rem, 5.5433rem + 14.2574vw, 18.375rem);

    margin-top: 0.5rem;

    & img {
      position: absolute;
      width: clamp(12.5rem, 6.0606rem + 23.9604vw, 27.625rem);

      top: 0;
      left: clamp(0rem, 0.8515rem + -3.1683vw, -2rem);

      @media (${({ theme }) => theme.SCREENS.MD}) {
        left: clamp(-2rem, -1.1485rem + -3.1683vw, -4rem);
      }
    }
    & .texts {
      margin-top: 1.875rem;
      margin-right: clamp(1.25rem, -0.8787rem + 7.9208vw, 6.25rem);

      & h1 {
        font-size: clamp(1.125rem, 0.5396rem + 2.1782vw, 2.8rem);
      }

      & p {
        width: clamp(13rem, 11.297rem + 6.3366vw, 17rem);
        font-size: clamp(0.75rem, 0.6436rem + 0.396vw, 1rem);

        @media (${({ theme }) => theme.SCREENS.MD}) {
          width: unset;
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 20%;
      right: 0;
      left: 2.25rem;

      width: 100%;
      height: 80%;
      border-radius: 0.3125rem;

      background: ${({ theme }) => theme.GRADIENTS.G200};
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0.3125rem;
      left: -0.625rem;
      width: 1.3125rem;
      height: 1.375rem;
      background: ${({ theme }) => theme.DARK.D400};
    }
  }
`
