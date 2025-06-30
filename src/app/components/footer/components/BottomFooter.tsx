'use client'
import { Github, Linkedin, Twitter, Palette  } from "lucide-react";
import Link from "next/link";
import { Socials } from "./socials";
import { ROUTES } from "@/constants/routes";
import { useState } from "react";
import { SelectLanguage } from "./SelectLanguage";

export const BottomFooter = () => {
   
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    return (
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-sm">
        {/* Social + legal links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
         
          {/* Socials */}
          <div className="flex justify-center sm:justify-start">
            <Socials title="GitHub" href="https://github.com" icon={Github} />
            <Socials title="Twitter" href="https://twitter.com" icon={Twitter} />
            <Socials title="LinkedIn" href="https://linkedin.com" icon={Linkedin} />
          </div>

          {/* Legal links */}
          <div className="flex justify-center sm:justify-start gap-4 text-gray-400">
            <Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>

        {/* Language & Theme toggles */}
        <div className="flex items-center justify-center gap-4">
          {/* <button className="text-gray-400 hover:text-white transition flex"><Languages/> <span>EN</span></button> */}
          <SelectLanguage/>
          <button className="text-gray-400 hover:text-white transition flex"><Palette/> <span>Theme</span></button>
           <span className="text-xs sm:text-center ">
            © 2024{" "}
            <Link href={ROUTES.HOME} className="hover:underline">
              eClose™
            </Link>
          </span>
        </div>
        
      </div>
    )
}

export default BottomFooter;