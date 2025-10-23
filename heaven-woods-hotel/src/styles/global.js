// styles/global.js
import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2c5530', // Nature green
    secondary: '#d4af37', // Gold accent
    background: '#f8f9fa',
    text: '#333333'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  }
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: ${theme.colors.text};
  }
`;