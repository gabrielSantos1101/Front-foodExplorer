import { styled } from 'styled-components'

export const Wrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding: 2.25rem 2.875rem;

  & button {
    font-size: 1.3125rem;
    align-self: flex-start;
  }

  & img {
    width: clamp(16.5rem, 13.1473rem + 12.4752vw, 24.375rem);
    height: clamp(16.5rem, 13.1473rem + 12.4752vw, 24.375rem);

    margin-top: 1rem;
    border-radius: 99999px;
    pointer-events: none;
  }

  & div:has(h1) {
    text-align: center;
  }

  & h1 {
    font-size: clamp(1.5rem, 1.0743rem + 1.5842vw, 2.5rem);

    margin-top: 1rem;
  }

  & p {
    font-size: clamp(1rem, 0.7871rem + 0.7921vw, 1.5rem);
    margin-top: 1.5rem;
  }

  & section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 1.5rem;

    width: 100%;
    padding: 1rem;
  }

  @media (${({ theme }) => theme.SCREENS.MD}) {
    flex-direction: row;
    gap: 3.125rem;

    & div:has(h1) {
      text-align: left;
    }
  }
`
export const Amount = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  & button {
    font-size: 0.7rem;
  }

  & .stepper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    font-size: 1.375rem;

    & svg {
      cursor: pointer;
    }

    & span {
      text-align: center;
      min-width: 1.875rem;
    }
  }

  @media (${({ theme }) => theme.SCREENS.MD}) {
    & button {
      width: fit-content;
      padding-inline: 2rem;
    }
  }
`
