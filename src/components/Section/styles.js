import { styled } from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 90rem;
  width: 100%;
  margin-inline: auto;
  padding: 0.9375rem;

  & section {
    display: grid;
    gap: 1rem;

    .splide__list {
      gap: 1rem;
    }

    .splide__slide {
      width: 100%;
      max-width: clamp(13.125rem, 10.7302rem + 8.9109vw, 18.75rem);
    }

    & .splide__arrow--prev {
      left: 0;
      height: 90%;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.8) 0%,
        rgba(0, 10, 15, 0) 100%
      );
    }

    & .splide__arrow--next {
      right: 0;
      height: 90%;
      background: linear-gradient(
        -90deg,
        rgba(0, 10, 15, 0.8) 0%,
        rgba(0, 10, 15, 0) 100%
      );
    }

    & .splide__arrow svg {
      fill: ${({ theme }) => theme.LIGHT.L100};
    }

    & .splide__arrow:disabled {
      display: none;
    }
  }
`
