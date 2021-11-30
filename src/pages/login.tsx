import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Image from 'next/image';
import InfinityLogo from '../images/logo-infinity.svg';
import GeartechLogo from '../images/logo-geartech.svg';
import { Form, Header, Page, Root } from '../styles/loginStyle';

const Login:NextPage   = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Root>
            <div className='main'>
            <Header>
                <Image src={InfinityLogo} alt="Infinity" height={50} width={50}/>
                Infinite-Gear
                <Image src={GeartechLogo} alt="Infinity" height={50} width={50}/>
            </Header>
            <Page>

            <Form className='socials'>
            <button className='facebook'>
                Log in with <b>Facebok</b>
            </button>
            <button className='google'>
                Log in with <b>Google</b> 
            </button>
            </Form>
            <div className='hr'/>
            <Form>
            <input/>
            <input/>
            <button className='login'>
                Login
            </button>
            <div className='newA'>Não tem uma conta?<Link href="/signin">cadastre-se</Link></div>
            </Form>
            </Page>
            </div>

            </Root>
        </>
    )
}

export default Login;