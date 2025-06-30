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
    <div className="flex gap-4 text-sm h-full">
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return(

            <Link
              key={link.label}
              href={link.href}
              className={`flex w-full items-center gap-1 h-full border-b-2 transition self-center
                ${isActive ? 'border-[#e17100] text-[#e17100]' : 'border-transparent hover:text-[#e17100]'}`}
            >
          {link.icon}<span>{link.label}</span>
          </Link>
        )
        }
      )}

    </div>
  );
};
