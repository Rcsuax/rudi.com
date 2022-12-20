import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
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
  )
}

export default Navbar