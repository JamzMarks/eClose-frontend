

import { FooterLogo } from "./FooterLogo";
import { FooterLink } from "./FooterLink";
import { FooterSection } from "./FooterSection";

export const UpperFooter = () => {
  return (
    <div className="md:flex md:justify-between md:items-start mb-8">
      <div className="mb-8 md:mb-0">
        <FooterLogo />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <FooterSection title="Resources">
          <FooterLink href="https://flowbite.com/">Flowbite</FooterLink>
          <FooterLink href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        </FooterSection>
        <FooterSection title="Follow us">
          <FooterLink href="https://github.com/themesberg/flowbite">Github</FooterLink>
          <FooterLink href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        </FooterSection>
        <FooterSection title="Legal">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </FooterSection>
      </div>
    </div>
  );
};

export default UpperFooter;
