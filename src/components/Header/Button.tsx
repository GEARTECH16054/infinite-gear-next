import { ButtonHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import  { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    border?:boolean;
    negative?:boolean;
}
const Button: React.FC<ButtonProps> = ({text, border, negative, ...rest}) => {

    
    return (
        <a>
        <ButtonContainer negative={negative} border={border} >
            {text}
        </ButtonContainer>
        </a>
    )
}

export default Button
