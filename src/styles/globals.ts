import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --dominant:#112037;
    --secundary:#D8A31A;
    --ice-blue:#b5c1e0;
    --ice-purple:#49416b;
    --white-shade:#f1f1e6;
    
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