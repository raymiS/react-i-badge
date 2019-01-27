import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background-color: black;
    font-size: 16px;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
  }

  * {
    outline: none;
  }

  nav ol,
  nav ul {
    list-style: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  progress {
    vertical-align: baseline;
  }
`;

export const App = styled.div`
  background: black;
  color: white;
  position: relative;
  font-size: 2em;
`;
