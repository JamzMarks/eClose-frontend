import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <Link href={href} className="hover:underline text-gray-300 hover:text-white transition">
      {children}
    </Link>
  </li>
);
