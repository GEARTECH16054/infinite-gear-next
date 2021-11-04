import styled from 'styled-components'

interface props{
open: boolean;
}

interface BtnProps{
    negative?: boolean;
    xsize:number
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
transition:0.3s;
padding: 0 20px;
border-radius:5px;
height:5rem;
background-color:${(ScrollProps)=>(ScrollProps.scroll > 60 ? "#DDB34D":"transparent")};
user-select: none;
position: -webkit-fixed;
position: fixed;
`;

export const Logo = styled.a`
position:relative;
font-weight: 700;
color:  #112037;
font-size:1.5em;
text-transform:uppercase;
letter-spacing:2px;
transition:0.6s;
z-index:-2;
`;


export const ButtonContainer = styled.div<BtnProps>`
width:${(props)=> (props.xsize+'rem')};
border-color:#112037;
border-radius:5px;
height:2rem;
margin:0.8rem 0.8rem;
justify-content: center;
align-items: center;
display:flex;
color:#112037;
transition:all 0.1s ease;
border:${(props) =>(props.negative ? '2px #112037 solid':'none')};

    &:hover{
        background-color:#112037;
        color:#fff;
        border-radius:5px;
        transition:all 0.2s linear;
        
        }
@media(max-width:1000px){
    width:${(props)=>props.xsize * 1.5}rem;
    height:3rem;
}
`;

export const Hul = styled.ul<props>`
list-style:none;
display:flex;
flex-flow:row nowrap;
font-weight:400;
font-family:Gotham;
li{
    padding:18px 5px;
    color:  #112037;
    a{
        font-size:13px;
        padding:5px;
    }
    &:hover a{
        background-color:#112037;
        color:#fff;
        border-radius:5px;
        transition:all 0.2s linear;
        }
}


@media (max-width:1050px){
        flex-flow:column nowrap;
        position:fixed;
        z-index:999;
        top:-10vh;
        right:0;
        font-size:26px;
        height:210vh;
        width:50vh;
        padding-top:3rem;
        transform:${(props)=>(props.open ? 'translateX(0)':'translateX(100%)')};
        transition:transform 0.2s ease-in-out;
        background-color: #f6d33a;
        
        li{
            a{
                font-size:26px;
            }
        }
}
@media(max-width:1050px){
    li{
        a{
            font-size:28px;
        }
    }
}

`;

export const BurgerIcon = styled.div<props>`
    width:2rem;
    height:2rem;
    position:fixed;
    top:15px;
    right:20px;
    display:none;

    @media(max-width:1000px){
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
