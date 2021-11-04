import { ButtonHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import { useRouter } from 'next/router'
import React from 'react'
import  { ButtonContainer } from '../MainHeader/styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    xsize:number;
    negative?:boolean;
    path?:string;
}
const Button: React.FC<ButtonProps> = ({text, xsize, negative, path, ...rest}) => {

    const router = useRouter();
    return (
        <ButtonContainer onClick={()=> router.push(`${path}`)} negative={negative} xsize={xsize} >
            {text}
        </ButtonContainer>
    )
}

export default Button
