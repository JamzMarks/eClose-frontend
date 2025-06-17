"use client";

import { Compass, MapPin, Rss } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/explore", label: "Explore", icon: <Compass size={16} /> },
    { href: "/map", label: "Map", icon: <MapPin size={16} /> },
    { href: "/feed", label: "Feed", icon: <Rss size={16} /> },
  ];
  return (
    <div className="flex items-center gap-4 text-sm h-full">
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return(

            <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-1 h-full border-b-2 transition 
              ${isActive ? 'border-[#e17100] text-[#e17100]' : 'border-transparent hover:text-[#e17100]'}`}
            >
          {link.icon}<span>{link.label}</span>
          </Link>
        )
        }
      )}

      {/* <Link
        href="/explore"
        className="flex items-center gap-1 hover:text-[#e17100] transition h-full"
      >
        <Compass size={16} /> <span>Explore</span>
      </Link>
      <Link
        href="/map"
        className="flex items-center gap-1 hover:text-[#e17100] transition"
      >
        <MapPin size={16} /> <span>Map</span>
      </Link>
      <Link
        href="/feed"
        className="flex items-center gap-1 hover:text-[#e17100] transition"
      >
        <Rss size={16} /> <span>Feed</span>
      </Link> */}
    </div>
  );
};
