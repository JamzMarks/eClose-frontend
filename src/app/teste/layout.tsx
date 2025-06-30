
import Navbar from "../components/navbar/Navbar";

export default function TesteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-full max-w-screen overflow-hidden">
      {/* Navbar fixa no topo */}
      <header className="shrink-0 w-full">
        <Navbar />
      </header>

      {/* Área principal: sidebar + conteúdo */}
      <div className="flex flex-1 overflow-hidden w-full max-w-screen">
        {/* Sidebar fixa na esquerda */}
        <aside className="shrink-0">
        </aside>

        {/* Conteúdo com scroll Y e largura restrita */}
        <main className="flex-1 min-h-0 overflow-hidden flex flex-col w-full max-w-screen">
          <div className="flex-1 overflow-y-auto overflow-x-hidden w-full max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
