import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-family: 'Poppins', sans-serif;
    font-weight: 400;
  
    color-scheme: light dark;
      
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: ${({ theme }) => theme.DARK.D400};
    color: #f1f1f1;

    #root {
      height: 100%;
      width: 100%;
    }
}

input:focus, textarea:focus {
  outline: 1px solid ${({ theme }) => theme.DARK.D800};
}

h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, a::selection, h6::selection,p::selection, span::selection, textarea::selection, input::selection {
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.DARK.D600};
}

a {
    text-decoration: none;
    color: inherit;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}

div::-webkit-scrollbar, textarea::-webkit-scrollbar, section::-webkit-scrollbar, ul::-webkit-scrollbar, p::-webkit-scrollbar{
  width: 1.25rem;
}

div::-webkit-scrollbar-track, textarea::-webkit-scrollbar-track, section::-webkit-scrollbar-track, ul::-webkit-scrollbar-track, p::-webkit-scrollbar-track{
  margin-block-start: 2.75rem;
}

div::-webkit-scrollbar-thumb, textarea::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb, ul::-webkit-scrollbar-thumb, p::-webkit-scrollbar-thumb{
  box-shadow: inset 0 0 1rem 1rem ${({ theme }) => theme.DARK.D800};
  border: solid 7px transparent;
  border-radius: 2rem;
  background-clip: padding-box;
}
`