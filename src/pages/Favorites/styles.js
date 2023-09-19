import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  padding: 2rem;

  & h1 {
    font-size: clamp(1.375rem, 1.1089rem + 0.9901vw, 2rem);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.01);
    }
  }
`

export const Wrap = styled.div`
  width: 100%;
  max-width: minmax(30rem, 90rem);
  margin-top: 1rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (${({ theme }) => theme.SCREENS.MD}) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }
`
