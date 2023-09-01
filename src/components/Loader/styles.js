import { styled } from 'styled-components'

export const Wrap = styled.div`
  figure {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    margin: -60px -50px;
    transform-style: preserve-3d;
    perspective: 600px;
  }

  figure span {
    display: block;
    position: absolute;
    transform-origin: 50% 100%;
  }

  figure span:after {
    display: block;
    content: '';
    border-style: solid;
    border-color: transparent;
    border-width: 100px 58px 0;
    backface-visibility: hidden;
  }

  figure span:nth-child(1) {
    transform: rotate3d(0, 0, 1, 30deg);
    animation: split 2s 0s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
  }

  figure span:nth-child(2) {
    transform: rotate3d(0, 0, 1, 90deg);
    animation: split 2s 0.1111111111s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
  }

  figure span:nth-child(3) {
    transform: rotate3d(0, 0, 1, 150deg);
    animation: split 2s 0.2222222222s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
  }

  figure span:nth-child(4) {
    transform: rotate3d(0, 0, 1, 210deg);
    animation: split 2s 0.3333333333s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
  }

  figure span:nth-child(5) {
    transform: rotate3d(0, 0, 1, 270deg);
    animation: split 2s 0.4444444444s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
  }

  figure span:nth-child(6) {
    transform: rotate3d(0, 0, 1, 330deg);
    animation: split 2s 0.5555555556s ease infinite;
    transform: rotate3d(0.5, 1, 0, 180deg);
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
