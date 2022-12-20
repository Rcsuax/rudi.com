import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import ProductCards from '../src/components/ProductCards'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nomad Store</title>
        <meta name="description" content="Nomad illustrations Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='mx-[20px]'>
        <img 
          className="w-full h-[500px] mt-[60px]"
          src='/products/Raina Splash.jpg' 
          alt='Banner Splash' />

        <ProductCards />
      </main>

      <Footer />
    </div>
  )
}
