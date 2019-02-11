import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background-color: #002340;
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
  color: white;
  position: relative;
  font-size: 2em;
  width: 1200px;
  margin: 0 auto;
`;

export const Exercises = styled.div`
  display: flex;
  margin-top: 3em;
`;

export const ExerciseOne = styled.div`
  background: #004d8c;
  margin-right: 3em;
  padding: 2em;
  border-radius: 5px;
`;

export const ExerciseTwo = styled.div`
  background: #8c5500;
  padding: 2em;
  border-radius: 5px;
`;
