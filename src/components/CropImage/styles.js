import { styled } from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 99;
  backdrop-filter: blur(3px) brightness(40%);

  & .cropped-image {
    width: auto;
  }

  & .cropped-image-container {
    display: flex;
    flex-direction: column;
  }

  & ._coverImage-holder {
    padding: 1.5625rem 2.5rem;
    background-color: black;
    border-radius: 5px;
    cursor: pointer;
  }

  & .container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  & .crop-container {
    height: 600px;
    width: 100%;
    position: relative;
  }

  & .controls {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
    max-width: 37.5rem;

    margin-inline: auto;
    padding-inline: 1rem;

    margin-top: 2rem;

    & .sliders {
      display: flex;
      gap: 2rem;
      justify-content: space-between;

      & label {
        flex: 1;
      }
    }

    & .buttons {
      display: flex;
      gap: 2rem;
      width: 100%;

      & button:last-child {
        background: ${({ theme }) => theme.DARK.D900};
      }
    }
  }
`
