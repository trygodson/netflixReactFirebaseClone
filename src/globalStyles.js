import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: Arial, sans-serif, helvetica;
        -web-kit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: greyscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
        ::-webkit-scrollbar {
            width: 0px;
            }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
    }
`;