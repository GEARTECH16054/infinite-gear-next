import React,{useState} from 'react'
import Nav from './Nav'
import { BurgerIcon } from './styles'

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <BurgerIcon open={open} onClick={()=> setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </BurgerIcon>
        <Nav open={open}/>
        </>
    )
}

export default Burger
