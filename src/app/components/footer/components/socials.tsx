import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialsProps {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const Socials = ({ title, href, icon: Icon }: SocialsProps) => {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors mx-2"
      aria-label={title}
    >
      <Icon size={24} />
    </Link>
  );
};
