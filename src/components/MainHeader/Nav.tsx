import React from 'react'
import Button from './Button';
import { Hul } from './styles'
import Link from 'next/link'

const Nav = ({open}:any) => {    
    return (
            <Hul open={open} style={{zIndex:-1}}>
                <li>
                    <Link href="/">
                        <a>Página Inicial</a>
                    </Link>
                </li>
                <li>
                    <Link href="/seasons">
                        <a>Temporadas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Sobre Nós</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Robôs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Patrocinadores</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">  
                        <a>Outreach</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contato</a>
                    </Link>
                </li>

                <Button text="Login" xsize={5}/>
                
                <Button text="Cadastro" negative={true} xsize={6}/>
                
            </Hul>
    )
}

export default Nav;
