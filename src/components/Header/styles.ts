import styled from 'styled-components'
interface props{
open: boolean;
}

interface BtnProps{
    negative?: boolean;
    border?: boolean;
}

interface ScrollProps{
    scroll:number;
}

export const HeaderContainer = styled.div<ScrollProps>`
display:flex;
overflow: auto;
align-self: flex-start;
top:0;
width:100%;
justify-content: space-around;
transition:0.6s;
padding: 0 20px;
background-color:${(ScrollProps)=>(ScrollProps.scroll > 10 ? "transparent":"#000")};
user-select: none;

`;

export const Logo = styled.a`
position:relative;
font-weight: 700;
color:  #112037;
font-size:2em;
text-transform:uppercase;
letter-spacing:2px;
transition:0.6s;
`;


export const ButtonContainer = styled.div<BtnProps>`
width:5rem;
border-color:${(Btnprops) => (Btnprops.negative ? ' #112037':'#333')};
border-radius:5px;
height:2rem;
margin:0.8rem 0.8rem;
justify-content: center;
align-items: center;
display:flex;
color:#112037;
transition:all 0.1s ease;
border:${(Btnprops) =>(Btnprops.negative ? '2px #112037 solid':'none')};

    &:hover{
        background-color:#112037;
        color:#fff;
        border-radius:5px;
        transition:all 0.2s linear;
        
        }
`;

export const Hul = styled.ul<props>`
list-style:none;
display:flex;
flex-flow:row nowrap;


li{
    padding:18px 5px;
    color:  #112037;
    a{
        font-size:16px;
        padding:5px;
    }
    &:hover a{
        background-color:#112037;
        color:#fff;
        border-radius:5px;
        transition:all 0.2s linear;
        
        }
}

@media (max-width:890px){
    flex-flow:column nowrap;
    position:fixed;
    top:-15px;
    right:0;
    height:100vh;
    width:200px;
    padding-top:3rem;
    transform:${(props)=>(props.open ? 'translateX(0)':'translateX(100%)')};
    transition:transform 0.2s ease-in-out;
    background-color: #f6d33a;
}

`;

export const BurgerIcon = styled.div<props>`
    width:2rem;
    height:2rem;
    position:fixed;
    top:15px;
    right:20px;
    z-index:20;
    display:none;

    @media(max-width:890px){
        justify-content:space-around;
        display:flex;
        flex-flow:column nowrap;
    }

    div{
        width:2rem;
        height:0.25rem;
        background-color:${(props) => (props.open ? ' #112037': '#333')};
        border-radius:2px;
        transform-origin:1px;
        transition: all 0.2s ease-in-out;

        &:nth-child(1){
            transform: ${(props) =>(props.open ? 'rotate(45deg);':'rotate(0);')}
        }
        &:nth-child(2){
            transform: ${(props) =>(props.open ? 'translate(-100%);':'translate(0);')};
            opacity: ${(props) => (props.open ? 0:1)};
        }
        &:nth-child(3){
            transform: ${(props) =>(props.open ? 'rotate(-45deg);':'rotate(0);')}
        }
    }
`;
