import styled from 'styled-components'

export const Wrap = styled.div`
  flex: 1;
  display: flex;
  gap: 3rem;
  align-items: center;

  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
  padding: 2.25rem 2.875rem;

  padding: 1.5rem;
  border-radius: 0%.5rem;

  & div {
    width: clamp(16.5rem, 13.1473rem + 12.4752vw, 24.375rem);
    height: clamp(16.5rem, 13.1473rem + 12.4752vw, 24.375rem);
    aspect-ratio: 1/1;
    border-radius: 99999999px;
    object-fit: cover;
    transition: all 0.3s;
    cursor: pointer;
    background: rgba(209, 209, 209, 0.2);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  & strong {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    width: 60%;
    height: 1.25rem;

    border-radius: 0.5rem;
    background: rgba(209, 209, 209, 0.2);
    margin-bottom: 1rem;
  }

  & span {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    width: 100%;
    height: clamp(0.625rem, 0.5079rem + 0.4356vw, 0.9rem);

    border-radius: 0.5rem;

    background: rgba(209, 209, 209, 0.2);
  }

  & aside {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    & dir {
      display: flex;
      gap: 0.625rem;
      width: 100%;
      margin-top: 1rem;

      & strong {
        width: 6.25rem;
      }
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`
