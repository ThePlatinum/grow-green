import Head from 'next/head'
import '../styles/globals.css'
import '../styles/swipper.min.css'
import '../utils/swipper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grow Green</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
