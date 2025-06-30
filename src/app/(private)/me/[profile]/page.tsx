'use client';

import { useSession, signOut } from "next-auth/react";
import { ProfileHeader } from "./components/ProfileHeader";

export const UserPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;
  if (status === "unauthenticated") return <p>Você não está logado.</p>;

  return (
    <div className="w-full ">
      <ProfileHeader></ProfileHeader>
      <h1>Bem-vindo, Usuário!</h1>
      <p><strong>ID:</strong> {session?.user?.id}</p>
      <p><strong>Email:</strong> {session?.user?.email}</p>
      {/* <p className="text-wrap"><strong>AccessToken:</strong> {session?.accessToken}</p> */}

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
    </div>
  );
}
export default UserPage