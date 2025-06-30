import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AsideNavbar } from "./components/AsideNavbar/AsideNavbar";
// import { getServerSideProps } from "@/lib/device";
import { parseUserAgent } from "@/lib/device";
import { headers } from "next/headers";
import PrivateFooter from "./components/privateFooter/PrivateFooter";

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
    <div>
      {/* Navbar fixa no topo */}
      <header className=" w-full">
        <Navbar />
      </header>

      <div className="flex h-full">
        <aside className="border-r border-gray-100">
          <AsideNavbar />
        </aside>

        {/* Aqui é onde garantimos que o main NÃO ultrapasse */}
        <main className=" flex flex-col w-full max-w-full min-w-0 justify-center items-center">
          {/* min-w-0 evita que ele cresça além do necessário */}
          <div className="flex-1 w-full max-w-7xl">
            {children}
          </div>
          <PrivateFooter/>
        </main>
      </div>
    </div>
  );
}
