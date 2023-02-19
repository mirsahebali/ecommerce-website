import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Main from "@/pages/components/Main"
import Features from './components/Features'
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>MarkAll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>
      <main>
<Main></Main>
<Features></Features>
<Testimonials/>
      </main>
    </>
  )
}
