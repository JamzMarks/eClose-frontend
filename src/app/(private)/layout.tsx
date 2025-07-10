import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AsideNavbar } from "./components/asideNavbar/AsideNavbar";
// import { getServerSideProps } from "@/lib/device";
import { parseUserAgent } from "@/lib/device";
import { headers } from "next/headers";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent") || "";
  const device = parseUserAgent(userAgent);

  console.log("Device Info:", device); // Você pode passar isso por contexto se quiser

  return (
    <div className="bg-background text-foreground">
      {/* Navbar fixa no topo */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 ">
        <Navbar />
      </header>

      <div className="flex h-full mt-16">
        <div className="border-r border-bdneutral">
          <AsideNavbar />
        </div>

        {/* Aqui é onde garantimos que o main NÃO ultrapasse */}
        <main className=" flex flex-col w-full max-w-full min-w-0 justify-center items-center overflow-y-auto">
          {/* min-w-0 evita que ele cresça além do necessário */}
          <div className="flex-1 w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>

  );
}
