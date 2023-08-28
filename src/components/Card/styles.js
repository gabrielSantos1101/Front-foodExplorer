import { styled } from 'styled-components'

export const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  overflow: hidden;

  width: 100%;
  max-width: clamp(13.125rem, 10.7302rem + 8.9109vw, 18.75rem);

  padding: 1.5rem;
  border-radius: 0%.5rem;

  background: ${({ theme }) => theme.DARK.D200};

  & img {
    width: 60%;
  }

  & .texts {
    text-align: center;

    width: 90%;

    & h2 {
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      overflow: hidden;
    }

    & p {
      display: none;
      word-break: break-all;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    height: 27.625rem;

    & .texts p {
      display: -webkit-box;
    }
  }
`

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;

  & button {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};

    &:hover {
      transform: scale(1.02);
    }
  }

  & .stepper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    font-size: 1.375rem;

    & svg {
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }

    & span {
      text-align: center;
      min-width: 30px;
    }
  }
`

export const Heart = styled.label`
  display: block;
  position: absolute;
  right: 16px;
  top: 16px;

  cursor: pointer;
  font-size: 20px;
  user-select: none;
  transition: 100ms;

  &:hover {
    transform: scale(1.1);
  }

  & input {
    position: absolute;
    z-index: -99999;
    cursor: pointer;
    opacity: 0;
    height: 0;
    width: 0;

    &:checked ~ & {
      background: red;
    }
  }

  .checkmark {
    top: 0;
    left: 0;
    height: 1.3rem;
    width: 1.3rem;
    transition: 100ms;
    animation: dislike_effect 400ms ease;
  }

  & input:checked ~ .checkmark path {
    fill: ${({ theme }) => theme.COLORS.PERSIMMON_400};
    stroke-width: 0;
  }

  & input:checked ~ .checkmark {
    animation: like_effect 400ms ease;
  }

  @keyframes like_effect {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes dislike_effect {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
`
