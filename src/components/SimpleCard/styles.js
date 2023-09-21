import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  max-width: 17.5rem;
  width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;

  & img {
    width: 5rem;
    height: 5rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 100%;
  }

  & .texts {
    display: flex;

    & h3 {
      display: -webkit-box;
      width: max-content;
      word-break: break-all;
      -webkit-line-clamp: 1;
      -webkit-box-orient: horizontal;
      overflow: hidden;
      line-height: 135%;
    }

    & span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.LIGHT.L400};
      margin-top: 0.25rem;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;

    & span {
      font-size: 12px;
    }

    & button {
      color: ${({ theme, $redButtons }) =>
        !$redButtons ? theme.COLORS.PERSIMMON_400 : theme.LIGHT.L100};

      &:hover {
        transform: none;
      }
    }
  }

  @media (${({ theme }) => theme.SCREENS.XL}) {
    max-width: 26.9375rem;
  }
`
