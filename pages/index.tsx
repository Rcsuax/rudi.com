import Head from 'next/head'
import ProductCards from '../src/components/ProductCards'

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nomad illustrations Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-[20px]'>
        <h1 className="">
          Nomad illustrations
        </h1>

        <ProductCards />
        
      </main>

      <footer className="flex flex-col items-center w-full h-fit fixed bottom-0 bg-white text-black">
        
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
