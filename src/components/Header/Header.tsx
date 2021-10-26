import { NextComponentType } from 'next'
import React,{useRef} from 'react'
import * as St from './styles';
import styles from '../../styles/Header.module.css';
import Nav from './Nav'
import Burger from './Burger';
import Button from './Button';

const Header: React.FC = ()=>{
    
    return(
        <St.HeaderContainer>
            <St.Logo>Logo</St.Logo>
            <Burger/>
            <Button text="Sign Up"/>
            <Button text="Sign In" negative={true}/>
        </St.HeaderContainer>
    )
}

export default Header;