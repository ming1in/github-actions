import '../styles/globals.css'
import type { AppProps } from 'next/app'

interface Shit {

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
