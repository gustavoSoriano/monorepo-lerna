import { createGlobalStyle } from 'styled-components';

export const GlobalStyl = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${({ theme }) => theme.colors.secondary.light};
    }

    * {
        box-sizing: border-box;
        margin:0px;
    }

`;
