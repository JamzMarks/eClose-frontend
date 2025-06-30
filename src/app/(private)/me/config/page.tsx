'use client';

import { useSession, signOut } from "next-auth/react";

export default function ConfigPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;
  if (status === "unauthenticated") return <p>Você não está logado.</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bem-vindo, Usuário!</h1>
      <p><strong>ID:</strong> {session?.user?.id}</p>
      <p><strong>Email:</strong> {session?.user?.email}</p>
      <p><strong>AccessToken:</strong> {session?.accessToken}</p>

      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "crimson",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sair
      </button>
    </main>
  );
}
