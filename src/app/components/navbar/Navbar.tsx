import Link from "next/link";
import { Searchbar } from "./components/Searchbar";
import Image from "next/image";
import { NavLinks } from "./components/NavLinks";
import ProfileModalButton from "./components/UserBtn/AuthBtn";

export const Navbar = () => {
  return (
    <nav className="px-2 xl:px-4 h-full bg-background dark:bg-background border-b border-bdneutral">
      <div className="h-full flex flex-row items-center justify-between gap-4 max-w-full">
        {/* Left - Logo + Search */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex">
            <Image src="/logo/logo.svg" alt="logo" width={80} height={80} />
          </Link>
          <Searchbar />
        </div>
        <NavLinks />
        <ProfileModalButton />
      </div>
    </nav>
  );
};

export default Navbar;
