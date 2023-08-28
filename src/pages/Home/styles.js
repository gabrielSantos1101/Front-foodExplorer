import { styled } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;

  & hgroup {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 9.375rem;
    overflow-y: hidden;

    margin-top: 0.5rem;

    & img {
      position: absolute;
      width: 12.5rem;
      top: 0;
      left: 0.3125rem;
    }
    & .texts {
      width: 13.4375rem;

      margin-top: 1.875rem;
      margin-right: 1.25rem;
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
  }
`
export const Wrap = styled.div`
  max-width: 90rem;
  width: 100%;
  margin-inline: auto;
  padding: 15px;

  .splide__arrow svg {
    fill: ${({ theme }) => theme.LIGHT.L100};
  }

  .splide__arrow:disabled {
    display: none;
  }
`
