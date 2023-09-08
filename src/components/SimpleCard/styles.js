import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;

  & img {
    width: 5rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 100%;
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
`
