import styled from "styled-components";

export const Root = styled.div`
height:100vh;
width:100vw;
flex-flow:column;
background-color:var(--dominant);
padding:25vh 30vw;
align-items:center;
justify-content:center;
.main{
    background-color:var(--black-shade);
    padding:2rem 4rem;
    width:30rem;
    border-radius:10px;
}
`;


export const Page = styled.div`
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
width:20rem;
margin:0 auto;
div{
align-items:center;}
& .hr{
    height:2px;
    margin:10px;
    width:100%;
    background:#666;
    border:none;
}

& .facebook{
background-color:#3b5998;
color:white;
}
& .google{
background-color:#db4437;
color:white;
}
button{
    border-radius:10px;
    border:none;
    margin:3px 0;
    height:20px;
    width:100%;
}
.socials{
    position:relative;
    &:after{
        content:"or";
        color:white;
        position:absolute;
        padding: 0 10px;
        background-color:var(--dominant-darker);
        bottom: -20px;
        left:45.5%;
    }
}
.login{
    background-color:var(--secundary-darker);
    color:var(--white-shade);
    border:none;
}
.newA{
    color:white;
}


`;

export const Form = styled.div`
flex-direction:column;
display:flex;
width:20rem;
input{
    border-radius:5px;
    height:3.5vh;
    width:100% ;
    padding:.5vh;
    border:solid #333 .5px;
    margin:5px 0;
    outline:none;
}

`;

export const Header = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-family:Bitsumishi;
font-size:38px;
filter:invert(1);
margin-bottom: 2rem;
`;