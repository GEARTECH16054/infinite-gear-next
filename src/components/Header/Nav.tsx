import React from 'react'
import Button from './Button';
import { Hul } from './styles'

const Nav = ({open}:any) => {    
    return (
            <Hul open={open} style={{zIndex:-1}}>
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

                <Button text="Sign Up" xsize={5}/>
                
                <Button text="Sign In" negative={true} xsize={5}/>
                
            </Hul>
    )
}

export default Nav;
