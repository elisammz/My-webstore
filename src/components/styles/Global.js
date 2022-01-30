import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

body{
    background: #FFFFFF;
    font-family: 'Poppins', sans-serif;
}

p{
    line-height: 1.5;
}

img{
    max-width:100%;
}`;

export default GlobalStyles;
