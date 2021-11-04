import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Sponsors:NextPage   = () => {
    return (
        <>
            <Head>
                <title>Patrocinadores</title>
                <meta name="description" />
                <link rel="icon" href="favicon.ico" />
            </Head>  
            <Header/>
        </>
    )
}

export default Sponsors;