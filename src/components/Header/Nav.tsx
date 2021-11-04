import React,{useState} from 'react'
import Button from './Button';
import { Hul } from '../MainHeader/styles'
import Link from 'next/link'

const Nav = ({open}:any) => { 
    let logged = true;

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
                {logged ? (<>
                <Button text="Login" onClick={() => logged = !logged } xsize={5}/>
                <Button text="Cadastro" onClick={() => console.log("clicked") } negative={true} xsize={6}/>
                </>)
                : null}
            </Hul>
    )
}

export default Nav;
