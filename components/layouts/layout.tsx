import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';
import { useRouter } from 'next/router';


interface Props {
    title?: string;
}

const origin = (typeof window ==='undefined')? '' : window.location.origin
export const Layout:FC<Props> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title || 'Pokemon'}</title>
            <meta name= "author" content="Eva"/>
            <meta name= "description" content={`Información sobre el pokemon ${title}`}/>
            <meta name= "keywords" content={`Información sobre el pokemon ${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Informacion sobre ${title} `}/>
            <meta property="og:description"  content={`Esta es la página sobre ${title} `}/>
            <meta property="og:image" content={`${origin}/img/banner.png`}/>
        </Head>
        <Navbar></Navbar>
        <main style={{
            padding:'0px 20px'
        }}>
            {children}
        </main>
    
    
    </>
  )
}
