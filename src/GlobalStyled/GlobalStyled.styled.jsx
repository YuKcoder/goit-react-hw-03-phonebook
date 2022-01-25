import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        padding: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    li {
        margin: 4px 0;
    }

    button {
        padding: 3px;
        margin: 0 8px;
        align-self: flex-start;
        cursor: pointer;
    }

    input {
        margin: 0 10px 0 10px;
    }

    label {
        margin: 4px 0 4px 8px;
    }
`;
