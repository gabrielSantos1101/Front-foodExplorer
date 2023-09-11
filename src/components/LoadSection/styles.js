import styled from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  gap: 1.5rem;

  width: 100%;
  max-width: 90rem;

  margin-inline: auto;
  padding: 0.9375rem;
  overflow-x: hidden;

  & section {
    display: flex;
    gap: 1rem;
  }

  & h2 {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    height: 1.5625rem;
    width: 8.125rem;

    border-radius: 0.9375rem;
    margin-top: 1rem;

    background: rgba(209, 209, 209, 0.1);
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`
