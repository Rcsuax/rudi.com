import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen ] = React.useState<boolean>(false)
  
  const onClick = () => {
    console.log('open');
    
    setOpen(!open)
  }


  return (<div>
      <nav className='hidden md:grid grid-cols-2 justify-between items-center px-[20px] fixed top-0 w-full h-[80px] z-10
        text-[#e6e6e6] bg-primary-pink'>
        
        <div className='flex flex-row justify-between text-[30px] gap-4'>
          <img src="/assets/ShinyNomad Icon.png" alt='Nomad logo' width={60} height={60}/>
          <Link href='/'> Comics </Link>
          <Link href='/'> Store </Link>
          <Link href='/'> Portfolio </Link>
          <Link href='/'> About </Link>
          <Link href='/'> Contact </Link>
        </div>

        <div className='flex flex-row gap-3 justify-end items-center'>
          <a href='https://www.instagram.com/shiny_nomad/'>
            <img src='/social/instagram.svg'/>
          </a>

          <a href='https://www.youtube.com/channel/UC-4AqNSCzZ1c9s3dI-WZufg'>
            <img src='/social/youtube.svg'/>
          </a>

          <a href='https://www.patreon.com/ShinyNomad/membership'>
            <img src='/social/patreon.svg'/>
          </a>

          <a href='https://twitter.com/ShiniestNomad'>
            <img src='/social/twitter.svg'/>
          </a>
        </div>
      </nav>

      <nav className="flex justify-between md:hidden bg-primary-pink h-[80px]">
        <img src="/assets/ShinyNomad Icon.png" alt='Nomad logo' width={90} height={90}/>
        <img src='/mobile-menu.svg' width={60} height={60} className='mr-[20px]' onClick={onClick}/>

        { open && (
          <div className="absolute w-full translate-y-[80px] h-screen bg-white z-10 ">
            <div className="text-black flex flex-col gap-10 h-full">
              <Link href='/' className="p-3"> Comics </Link>
              <Link href='/' className="p-3"> Store </Link>
              <Link href='/' className="p-3"> Portfolio </Link>
              <Link href='/' className="p-3"> About </Link>
              <Link href='/' className="p-3"> Contact </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar