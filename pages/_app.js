
import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="theme-colour" content="dark" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
