import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../components/theme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Garden App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Landing Page</h1>
      </main>
    </ThemeProvider>
    </>
  )
}
