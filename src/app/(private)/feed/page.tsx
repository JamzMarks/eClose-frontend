'use client'
import { useEffect, useState } from "react";

export const FeedPage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:3000/auth/me", {
      method: "GET",
      credentials: "include", // ESSENCIAL para enviar os cookies
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Não autenticado");
        const data = await res.json();
        setUser(data);
      })
      .catch(() => {
        // pode redirecionar ou mostrar erro
        console.log("Usuário não autenticado");
      });
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default FeedPage;
