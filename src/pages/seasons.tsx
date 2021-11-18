import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainHeader from '../components/MainHeader/MainHeader'
import { Container, Content } from '../styles/seasonsStyle'
import InfinityLogo from '../images/logo-infinity.svg'
import GeartechLogo from '../images/logo-geartech.svg'
import RSFLogo from '../images/RSF.svg'

const seasons:NextPage   = () => {
    
    return (
    <>
    <Head>
        <title>Temporadas</title>
        <meta name="description" />
        <link rel="icon" href="favicon.ico" />
    </Head>
    <Container>
        <Content>
            first
        </Content>
        <Content>
            second
        </Content>
        <Content>
            third
        </Content>
    </Container>
    <MainHeader/>
    </>
    )
}

export default seasons;
