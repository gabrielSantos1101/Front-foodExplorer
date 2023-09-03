import { styled } from 'styled-components'

export const Wrap = styled.div`
  flex: 1;
  & figure {
    transform: scale(0.7);
    opacity: 0.8;
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    margin: -60px -50px;
    transform-style: preserve-3d;
    transform: perspective(600);

    span {
      display: block;
      position: absolute;
      transform-origin: 50% 100%;

      &:after {
        display: block;
        content: '';
        border-style: solid;
        border-color: transparent;
        border-width: 100px 58px 0;
        backface-visibility: hidden;
      }

      &:nth-child(1) {
        transform: rotate3d(0, 0, 1, 90deg);

        &:after {
          border-top-color: #065e7c;
          filter: saturate(1);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.11111s ease infinite;
        }
      }

      &:nth-child(2) {
        transform: rotate3d(0, 0, 1, 150deg);

        &:after {
          border-top-color: #1a6b86;
          filter: saturate(1.3);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.22222s ease infinite;
        }
      }

      &:nth-child(3) {
        transform: rotate3d(0, 0, 1, 210deg);

        &:after {
          border-top-color: #2e7891;
          filter: saturate(1.4);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.33333s ease infinite;
        }
      }

      &:nth-child(4) {
        transform: rotate3d(0, 0, 1, 270deg);

        &:after {
          border-top-color: #42849b;
          filter: saturate(1.5);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.44444s ease infinite;
        }
      }

      &:nth-child(5) {
        transform: rotate3d(0, 0, 1, 330deg);

        &:after {
          border-top-color: #5691a6;
          filter: saturate(1.6);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.55556s ease infinite;
        }
      }

      &:nth-child(6) {
        transform: rotate3d(0, 0, 1, 390deg);

        &:after {
          border-top-color: #6a9eb0;
          filter: saturate(1.7);
          transform: rotate3d(0.5, 1, 0, 180deg);
          animation: split 2s 0.66667s ease infinite;
        }
      }
    }
  }

  @keyframes split {
    0% {
      transform-origin: 50% 100%;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }

    25% {
      transform-origin: 50% 100%;
      transform: rotate3d(0, 1, 0, 360deg);
    }

    50% {
      opacity: 1;
      transform-origin: 100% 0%;
      transform: rotate3d(0, 1, 0, 360deg);
    }

    75% {
      opacity: 0;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }

    100% {
      opacity: 1;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }
  }

  @keyframes split {
    0% {
      transform-origin: 50% 100%;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }

    25% {
      transform-origin: 50% 100%;
      transform: rotate3d(0, 1, 0, 360deg);
    }

    50% {
      opacity: 1;
      transform-origin: 100% 0%;
      transform: rotate3d(0, 1, 0, 360deg);
    }

    75% {
      opacity: 0;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }

    100% {
      opacity: 1;
      transform: rotate3d(0.5, 1, 0, 180deg);
    }
  }
`
