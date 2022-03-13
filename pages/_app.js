
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

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
