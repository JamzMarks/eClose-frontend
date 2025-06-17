'use client';

import { useSession } from "next-auth/react";
import ProfileAside from "../components/ProfileAside";


export const FeedPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar no topo (mobile) e lateral (desktop) */}
      <ProfileAside />

      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Feed</h1>

        {status === "loading" && <p>Carregando...</p>}

        {session?.user ? (
          <div className="space-y-2">
            <p>Bem-vindo, <strong>{session.user.name}</strong></p>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify(session.user, null, 2)}
            </pre>
          </div>
        ) : (
          <p>Você precisa estar logado.</p>
        )}
      </main>
    </div>
  );
};

export default FeedPage;
