import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Wrap = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  overflow: hidden;

  width: 100%;
  max-width: clamp(13.125rem, 10.7302rem + 8.9109vw, 18.75rem);
  height: fit-content;
  max-height: 30.75rem;

  padding: 1.5rem;
  border-radius: 0%.5rem;

  background: ${({ theme }) => theme.DARK.D200};

  & .isNew {
    position: absolute;
    left: 0;
    top: 0.625rem;

    color: #ffc700;
    font-weight: 600;

    transform: rotate(-45deg);

    animation: 700ms blink linear infinite alternate;
  }

  @keyframes blink {
    100% {
      scale: 0.9;
    }
  }

  & img {
    width: clamp(6.25rem, 4.9196rem + 4.9505vw, 9.375rem);
    height: clamp(6.25rem, 4.9196rem + 4.9505vw, 9.375rem);
    border-radius: 99999999px;
    object-fit: cover;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  & .cardIcon {
    position: absolute;
    right: 1rem;
    top: 1rem;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  & .texts {
    text-align: center;

    width: 90%;

    & h2 {
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      overflow: hidden;
      cursor: pointer;
    }

    & p {
      display: ${({ $isAdmin }) => ($isAdmin ? '-webkit-box' : 'none')};
      word-break: break-all;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 3.375rem;
    }
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    & .texts p {
      display: -webkit-box;
    }
  }
`

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  & span {
    font-size: clamp(1rem, 0.5743rem + 1.5842vw, 2rem);
  }

  & button {
    display: ${({ $isAdmin }) => ($isAdmin ? 'none' : 'initial')};
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
    margin-top: 1rem;

    &:hover {
      transform: scale(1.02);
    }
  }

  & .stepper {
    display: ${({ $isAdmin }) => ($isAdmin ? 'none' : 'flex')};
    justify-content: center;
    gap: 1rem;
    align-items: center;

    font-size: 1.375rem;
    margin-top: 0.75rem;

    & svg {
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }

    & span {
      text-align: center;
      min-width: 1.875rem;

      @media (${({ theme }) => theme.SCREENS.SM}) {
        min-width: 50px;
      }
    }
  }
`

export const Heart = styled.label`
  display: block;
  position: absolute;
  right: 1rem;
  top: 1rem;

  cursor: pointer;
  font-size: 1.25rem;
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
