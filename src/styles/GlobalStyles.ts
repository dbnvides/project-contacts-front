import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-green-900: #317d25;
    --color-green-800: #479239;
    --color-green-700: #5da74c;
    --color-green-600: #72bd60;
    --color-green-500: #88d274;
    --color-green-400: #8adf76;
    --color-green-300: #a3f08d;
    --color-green-200: #b3ff9a;
    --color-green-100: #e5ffd3;
    --color-gray-900: #212121;
    --color-gray-800: #424242;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-200: #eeeeee;
    --color-gray-100: #f5f5f5;
    --color-fixed-white: #fff;

    font-size: 60%;  
    
  }



  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    font-family: 'Inter';
 
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
