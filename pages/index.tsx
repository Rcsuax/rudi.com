import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import ProductCards from '../src/components/ProductCards'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Nomad Store</title>
        <meta name="description" content="Nomad illustrations Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* <img
          className="w-full h-[500px] md:mt-[80px]"
          src='/assets/Kickstarter Banner.jpg' 
          alt='Banner Splash' /> */}

        <video src='/assets/Banner.mp4' 
          className='w-full  md:mt-[80px]'
          preload="auto"
          autoPlay
          playsInline
          muted
          loop/>
        <h1 className='translate-y-[-400px] text-center text-white'>SHINY NOMAD</h1>

        <div className='mx-[20px]'>
          <ProductCards />  
        </div>
        <div className='h-[200px] bg-primary-pink'></div>
      </main>

      <Footer />
    </div>
  )
}
