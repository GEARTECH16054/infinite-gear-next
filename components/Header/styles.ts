import styled from 'styled-components'

export const HeaderContainer = styled.div`
display:flex;
top:0;
left:0;
width:100%;
justify-content: space-between;
align-items: center;
transition:0.6s;
padding: 40px 100px;
background-color:transparent;
position:fixed;
`;

export const Logo = styled.a`
position:relative;
font-weight: 700;
color: #fff;
font-size:2em;
text-transform:uppercase;
letter-spacing:2px;
transition:0.6s;
`;

export const HeaderBody = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
margin:5px;
`;

export const Anchor = styled.a`

`;

export const Hul = styled.ul`

`;

export const Hli = styled.li`

`;