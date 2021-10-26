import React from 'react'
import { Hul } from './styles'

const Nav = ({open}:any) => {
    console.log(open);
    
    return (
            <Hul open={open}>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Seasons</a>
                </li>
                <li>
                    <a>About Us</a>
                </li>
                <li>
                    <a>Our Robots</a>
                </li>
                <li>
                    <a>Sponsors</a>
                </li>
                <li>
                    <a>Outreach</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </Hul>
    )
}

export default Nav;
