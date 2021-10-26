import React from 'react'
import Button from './Button';
import { Hul } from './styles'

const Nav = ({open}:any) => {    
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

                <Button text="Sign Up"/>
                
                <Button text="Sign In" negative={true}/>
                
            </Hul>
    )
}

export default Nav;
