import { NextComponentType } from 'next'
import React,{useEffect, useState} from 'react'
import * as St from './styles';
import styles from '../../styles/Header.module.css';
import Nav from './Nav'
import Burger from './Burger';
import Button from './Button';

const Header: React.FC = ()=>{
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        document.addEventListener('scroll', ()=>{
            setScrollY(window.scrollY)
        });
    }, [])
    
    return(
        <St.HeaderContainer scroll={scrollY} className='header'>
            <St.Logo>{scrollY}</St.Logo>
            <Burger/>
        </St.HeaderContainer>
    )
}

export default Header;