import { styled } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & div {
    display: flex;
    gap: 0.625rem;
    justify-content: center;

    margin-bottom: 4.5rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 20rem;
  margin-bottom: 4rem;
`
