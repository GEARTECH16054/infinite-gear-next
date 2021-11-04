import React,{useState} from 'react'
import Button from './Button';
import { Hul } from '../MainHeader/styles'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Nav = ({open}:any) => { 
    const router = useRouter();
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
                    <Link href="/aboutUs">
                        <a>Sobre Nós</a>
                    </Link>
                </li>
                <li>
                    <Link href="/robots">
                        <a>Robôs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sponsors">
                        <a>Patrocinadores</a>
                    </Link>
                </li>
                <li>
                    <Link href="/outreach">  
                        <a>Outreach</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contactUs">
                        <a>Contato</a>
                    </Link>
                </li>
                
                <Button text="Login" path="/login" xsize={5}/>
                <Button text="Cadastro" path="/signin" negative={true} xsize={6}/>
                
            </Hul>
    )
}

export default Nav;
