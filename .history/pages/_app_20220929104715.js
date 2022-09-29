import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Head>
    <script src="https://kit.fontawesome.com/d14a45b8f3.js" crossorigin="anonymous"></script></Head><Component {...pageProps} />
}

export default MyApp
