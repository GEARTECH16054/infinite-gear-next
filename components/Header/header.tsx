import { NextComponentType } from 'next'
import React,{useRef} from 'react'
import * as St from './styles';
import styles from '../../styles/Header.module.css';

const Header: React.FC = ()=>{
    let headerRef = React.useRef<HTMLDivElement>(null);

    window.addEventListener("scroll", function(){
        var  header = document.getElementById("header");
        header?.classList.toggle("sticky");
    })
    return(
        <St.HeaderContainer id="header" ref={headerRef}>
            <St.Logo>Logo</St.Logo>
            <ul className={styles.hul}>
                <li className={styles.hli}>
                    <a className={styles.a}>Home</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>Seasons</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>About Us</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>Our Robots</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>Sponsors</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>Outreach</a>
                </li>
                <li className={styles.hli}>
                    <a className={styles.a}>Contact</a>
                </li>
            </ul>
        </St.HeaderContainer>
    )
}

export default Header;