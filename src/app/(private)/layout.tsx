import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import Navbar from "../components/navbar/Navbar";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    console.log(session)
  if (!session) {
    // redirect("/signin");
    // console.log('nao encontrado')
  }
  return (
    <>
      <Navbar></Navbar>
      <main className='max-w-[1240px] mx-auto px-4 min-h-screen'>
        {children}
      </main>
    </>
  );
}
