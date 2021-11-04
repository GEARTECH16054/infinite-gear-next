import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'

const SignIn:NextPage   = () => {
    return (
        <>
            <Head>
                <title>Cadastro</title>
                <meta name="description" />
                <link rel="icon" href="favicon.ico" />
            </Head>  
            <Header/>
        </>
    )
}

export default SignIn;