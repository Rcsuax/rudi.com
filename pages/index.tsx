import Head from 'next/head'
import Link from 'next/link'
import ProductCards from '../src/components/ProductCards'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nomad illustrations Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='grid grid-cols-3 justify-between items-center px-[20px] fixed top-0 w-full text-[#e6e6e6] bg-white/[0.06]'>
        <img alt='Nomad logo' width={30} height={30}/>
        
        <div className='flex flex-row justify-between text-[30px]'>
          <Link href='/'> Comics </Link>
          <Link href='/'> Portfolio </Link>
          <Link href='/'> Contact </Link>
        </div>

        <div className='flex flex-row gap-3 justify-end items-center'>
          <a href='https://www.instagram.com/shiny_nomad/'>
            <img src='/social/instagram.svg'/>
          </a>

          <a href=''>
            <img src='/social/youtube.svg'/>
          </a>

          <a href=''>
            <img src='/social/facebook.svg'/>
          </a>

          <a href=''>
            <img src='/social/twitter.svg'/>
          </a>
        </div>
      </nav>

      <main className='mx-[20px]'>
        <img 
          className="w-full h-[500px] mt-[60px]"
          src='/products/Raina Splash.jpg' 
          alt='Banner Splash' />

        <ProductCards />
      </main>

      <footer className="flex flex-col items-center w-full  bottom-0 bg-white text-black">
        
        <div className='flex flex-row gap-3 justify-center items-center mt-2'>
          <a href='https://www.instagram.com/shiny_nomad/'>
            <img src='/social/instagram.svg'/>
          </a>

          <a href=''>
            <img src='/social/youtube.svg'/>
          </a>

          <a href=''>
            <img src='/social/facebook.svg'/>
          </a>

          <a href=''>
            <img src='/social/twitter.svg'/>
          </a>
        </div>

        <p className='text-black'>™ ShinyNomad</p>
      </footer>
    </div>
  )
}
