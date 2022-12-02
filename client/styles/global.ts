import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    background-color: #2E3033;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  * {
    box-sizing: border-box;
  }

  .wrong-answer {
    font-weight: bolder;
    background-color: #EF9A9A;
  }

  .correct-answer {
    font-weight: bolder;
    background-color: #A5D6A7;
  }

  .p10 {
    padding: 10px;
  }

  .tc {
    text-align: center;
  }

  .color-white {
    color: white;
  }

  .ml5 {
    margin-left: 5px;
  }

  code-gray {
    background-color: #D6D6D6;
    padding: 0 5px;
  }
`;

export { GlobalStyle };