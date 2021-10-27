import React from 'react'
import Image from 'next/image'
import GeartechLogo from '../../images/logo-geartech.svg'
import InfinityLogo from '../../images/logo-infinity.svg'
import { ImgG, ImgI } from '../../styles/globalsc'

const MainBg = () => {
    return (
        <>
        <ImgG>
        <Image
        width={650}
        height={650}
        objectFit='fill'
        className="geartech"
        src={GeartechLogo} 
        alt="Logo" />
        </ImgG>
        <ImgI>
        <Image
        width={400}
        height={400}
        src={InfinityLogo} 
        alt="Logo"/>
        </ImgI>
        </>
    )
}

export default MainBg
