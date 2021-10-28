import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import { Container, Main, Title } from '../styles/indexStyles'
import MainBg from '../components/mainBg/MainBg'
import RSFLogo from '../images/RSF.svg'
import InfinityLogo from '../images/logo-infinity.svg'
import GeartechLogo from '../images/logo-geartech.svg'
import Button from '../components/Header/Button'


const Landing: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Infinite-Gear</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div style={{display:"flex",height:"100vh"}}>
      <MainBg/>
      </div>
      <Main style={{position:"absolute",left:"100px",top:"150px",width:"600px"}}>
        <Title style={{justifyContent:"flex-start"}}>Conheça a Robóticas Sem Fronteiras</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus feugiat metus, sed feugiat 
        erat. Proin fringilla vitae tortor ut maximus. Aenean congue imperdiet mattis. In vitae eros eu 
        turpis bibendum feugiat. Cras ac nisl luctus, venenatis nibh in, pellentesque mauris. Aliquam id 
        tortor sed nisl sagittis malesuada. In hac habitasse platea dictumst. Sed accumsan et dolor id 
        pellentesque. Suspendisse pellentesque lorem felis, sed blandit sem feugiat ac. Aliquam ultrices 
        turpis a iaculis interdum. Vivamus iaculis urna sem, eu laoreet risus hendrerit vitae. Nulla lacinia 
        consequat lorem, vel sodales risus efficitur nec. Nullam vel sem a nulla condimentum facilisis non 
        in nunc. Aenean at dolor quis mauris blandit scelerisque vel vel purus. Aliquam semper dignissim 
        volutpat.
        <Button text='Saiba Mais' negative xsize={10}/>
      </Main>
      <Header/>
      
      <div style={{backgroundColor:"#112037", color:"#FFF"}}>
        <Title>
          Our Mission
        </Title>
        <Main>
          <ul>
              <li>
                <div style={{display:"grid",justifyItems:"center",alignItems:"center",textAlign:"center"}}>
                <Image alt="placeholder" width="120" height="120" src={GeartechLogo}/>
                <br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
                </div>
              </li>
              <li>
                <div style={{display:"grid",justifyItems:"center",alignItems:"center",textAlign:"center"}}>
                  <Image alt="placeholder" width="100" height="100" src={InfinityLogo}/>
                  <br/>
                    A equipe foi fundada por José Junior e Lais de Paiva na Escola SESI Canaã (Goiânia- GO- BR)no ano de 2020. No início, os membros trabalhavam em ambas as categorias (FTC e FRC). Todavia, em agosto de 2021, os membros da equipe Geartech (FTC - Ultimate Goal - 2020/21) oficializaram-se como Infinity BR, uma equipe de FRC. Atualmente, a equipe é composta por 16 membros, todos estudantes da escola SESI Canaã, e 16 mentores, que incluem engenheiros, professores, ex-alunos, patrocinadores e voluntários.
                </div>
                </li>
          </ul>
        </Main>
      </div>
    </Container>
  )
}

export default Landing