import Link from 'next/link'
import { Searchbar } from './components/Searchbar'
import Image from "next/image";
import { NavBtn } from './components/UserBtn/NavBtn'
import { NavLinks } from './components/NavLinks';


export const Navbar = () => {
  
  return (
    <nav className="w-full h-16 px-6 shadow-md">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className='flex'>
            <Image src={'logo/logo.svg'} alt='logo' width={80} height={80}></Image>
          </Link>
          <Searchbar></Searchbar>
        </div>
        <NavLinks></NavLinks>
        <NavBtn></NavBtn>
      </div>
    </nav>
  )
}

export default Navbar
