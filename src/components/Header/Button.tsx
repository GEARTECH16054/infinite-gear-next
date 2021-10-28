import { ButtonHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import  { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    xsize:number;
    negative?:boolean;
}
const Button: React.FC<ButtonProps> = ({text, xsize, negative, ...rest}) => {

    
    return (
        <ButtonContainer negative={negative} xsize={xsize} >
            {text}
        </ButtonContainer>
    )
}

export default Button
