'use client';

import { useSession } from "next-auth/react";
import ProfileAside from "../components/ProfileAside/ProfileAside";
import { FeedComponent } from "./components/PostScrool.tsx/FeedComponent";
import NewsAside from "../components/NewsAside/NewsAside";


export const FeedPage = () => {
  // const { data: session, status } = useSession();
  console.log('renderizou')
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-6 mt-6">
      {/* Sidebar no topo (mobile) e lateral (desktop) */}
      <ProfileAside />
      <section className="flex-1">
        <div>

          <h1 className="text-2xl font-bold mb-4">Feed</h1>

          {status === "loading" && <p>Carregando...</p>}

          {/* {session?.user ? (
            <div className="space-y-2">
              <p>Bem-vindo, <strong>{session.user.name}</strong></p>
              <pre className="bg-gray-100 p-2 rounded text-sm">
                {JSON.stringify(session.user, null, 2)}
              </pre>
            </div>
          ) : (
            <p>Você precisa estar logado.</p>
          )} */}
        </div>
        <div>
          
        </div>
        <FeedComponent></FeedComponent>
      </section>
      <NewsAside></NewsAside>
    </div>
  );
};

export default FeedPage;
