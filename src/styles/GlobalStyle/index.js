import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    -webkit-font-smoothing: antialiased;
    font-family: ${(props) => props.theme.fonts.default};
}
button {
    cursor: pointer;
}
input:focus {
    outline: none;
}

fieldset{
    border: none;
}
`;
