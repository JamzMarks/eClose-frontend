import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import { LOGO } from "@/constants/logo";

export const FooterLogo = () => (
  <Link href={ROUTES.HOME} className="flex items-center">
    <Image src={LOGO.LOGO_MINIMAL} alt="logo" width={40} height={40} />
    <span className="ml-2 text-white font-semibold text-lg">Kanba</span>
  </Link>
);
