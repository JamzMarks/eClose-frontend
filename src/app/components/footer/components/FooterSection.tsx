interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
      {title}
    </h2>
    <ul className="space-y-2 font-medium text-sm">{children}</ul>
  </div>
);
