import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --in-blue:#112037;
    --in-gold:#ddb34d;
    
}
html,
body {
    
padding: 0;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
background-color: #fff;
width:100% auto;
outline:none;
}

a {
color: inherit;
text-decoration: none;
}

* {
box-sizing: border-box;
}
`;