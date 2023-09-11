import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  overflow: hidden;

  width: 100%;
  min-width: 12.5rem;
  max-width: clamp(13.125rem, 10.7302rem + 8.9109vw, 18.75rem);
  height: 100%;
  max-height: 25rem;

  padding: 1.5rem;
  border-radius: 0%.5rem;

  background: ${({ theme }) => theme.DARK.D200};

  & div {
    width: clamp(6.25rem, 4.9196rem + 4.9505vw, 9.375rem);
    height: clamp(6.25rem, 4.9196rem + 4.9505vw, 9.375rem);
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

    &:last-child {
      width: 50%;
    }
  }

  & span {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    width: 100%;
    height: clamp(0.625rem, 0.5079rem + 0.4356vw, 0.9rem);

    border-radius: 0.5rem;

    background: rgba(209, 209, 209, 0.2);
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`
