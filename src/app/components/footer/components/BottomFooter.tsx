"use client";

import { Github, Linkedin, Twitter, Palette } from "lucide-react";
import Link from "next/link";
import { Socials } from "./socials";
import { ROUTES } from "@/constants/routes";
import { useState } from "react";
import { SelectLanguage } from "./SelectLanguage";
import { TermsAndPrivacyModal } from "./TermsAndPrivacyModal";

export const BottomFooter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-sm">
        {/* Social + legal links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
          {/* Socials */}
          <div className="flex justify-center sm:justify-start">
            <Socials title="GitHub" href="https://github.com/JamzMarks" icon={Github} />
            <Socials
              title="Twitter"
              href="https://twitter.com"
              icon={Twitter}
            />
            <Socials
              title="LinkedIn"
              href="https://www.linkedin.com/in/james-marques-48828422b/"
              icon={Linkedin}
            />
          </div>

          {/* Legal links */}
          <div className="flex justify-center sm:justify-start gap-4 text-gray-400">
            <button
              onClick={() => setShowModal(true)}
              className="hover:underline cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Language & Theme toggles */}
        <div className="flex items-center justify-center gap-4">
          <SelectLanguage />
          <span className="text-xs sm:text-center ">
            © 2024{" "}
            <Link href={ROUTES.HOME} className="hover:underline">
              eClose™
            </Link>
          </span>
        </div>
      </div>

      <TermsAndPrivacyModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BottomFooter;
