import styled from 'styled-components';
import Image from 'next/Image';

export const Container = styled.div`
flex-direction: column;
justify-content: center;
align-items: center;
display:flex;
overflow: hidden;


`;
export const ImgI = styled.div`
opacity:0.1;
display:flex;
position:absolute;
overflow:hidden;

top:-30px;
left:-80px;

`;

export const ImgG = styled.div`
opacity:0.1;
display:flex;
position:relative;
overflow:hidden;
top:50px;
left:30rem;
`;
export const Title = styled.div`
margin-top:20px;
font-size:26px;
font-family:MontSerrat;
font-weight:700;
justify-content:center;
display:flex;
`;

export const Main = styled.div`
font-family:Antonio;
font-weight:600;
font-size:22px;
ul{
    list-style:none;
    grid-gap:10px;
    display:grid;
}   
`;