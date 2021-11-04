import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Contact:NextPage   = () => {
    return (
        <>
            <Head>
                <title>Contato</title>
                <meta name="description" />
                <link rel="icon" href="favicon.ico" />
            </Head>  
            <Header/>
        </>
    )
}

export default Contact;