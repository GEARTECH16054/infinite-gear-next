import styled from 'styled-components';

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
color:inherit;
`;

export const Main = styled.div`
font-family:Antonio;
font-weight:400;
font-size:22px;
@media(max-width:500px){

}
div{
    display:grid;
    justify-items:center;
    align-items:center;
    text-align:center;
}
img{
    filter:invert(1);
}
ul{
    list-style:none;
    grid-gap:10px;
    display:grid;
    grid-gap:1rem;
    grid-template-columns:1fr 1fr;
}   
`;

export const Container = styled.div`
flex-direction: column;
justify-content: center;
align-items: center;
display:flex;
overflow: hidden;

@media(max-width:500px){
    &.top{
    height:200vh;
    & ${Title}{
        font-size:40px;
    }
    & ${Main}{
        font-size:36px;
    }
    }

}
`;