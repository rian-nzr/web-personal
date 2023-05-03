import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/section/hero'
import About from '@/components/section/about'
// import Skills from '@/components/section/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>RIAN</title>
      </Head>
      <main >
        <div className="container mx-auto px-3">
          <Hero />
        </div>
        <div className="border-t-[0.5px] dark:border-c-bg-b border-gray-300">
          <div className="container mx-auto px-3 py-5">
            <About/>
          </div>
        </div>

      </main>
    </>
  )
}
