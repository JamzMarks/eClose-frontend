import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin"); // Redireciona se não estiver logado
  }
  return (
        {children}
  );
}
