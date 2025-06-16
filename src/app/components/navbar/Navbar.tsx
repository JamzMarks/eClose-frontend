import { Search, MapPin, Rss, Compass } from 'lucide-react'
import Link from 'next/link'
import { Searchbar } from './components/Searchbar'
import AuthBtns from './components/AuthBtn'
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-4 py-3 shadow-md">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className='flex'>
            <Image src={'logo/test.svg'} alt='logo' width={30} height={30}></Image>
          </Link>
          <Searchbar></Searchbar>
        </div>

        {/* Middle - Links */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/explore" className="flex items-center gap-1 hover:text-[#e17100] transition">
            <Compass size={16} /> <span>Explore</span>
          </Link>
          <Link href="/map" className="flex items-center gap-1 hover:text-[#e17100] transition">
            <MapPin size={16} /> <span>Map</span>
          </Link>
          <Link href="/feed" className="flex items-center gap-1 hover:text-[#e17100] transition">
            <Rss size={16} /> <span>Feed</span>
          </Link>
        </div>

        {/* Right - Auth Buttons */}
        <AuthBtns />
      </div>
    </nav>
  )
}

export default Navbar
