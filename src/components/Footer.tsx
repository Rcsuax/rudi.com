import React from "react";

const Footer = () => {
  return (
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
  )
}

export default Footer