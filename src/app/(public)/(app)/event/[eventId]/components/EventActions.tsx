'use client'
import { useState } from "react";

export default function EventActions({ eventId }: { eventId: string }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="flex items-center gap-4">
      <button onClick={toggleLike} className={`text-lg ${liked ? "text-red-500" : "text-gray-600"}`}>
        ❤️ {liked ? "Você curtiu" : "Curtir"}
      </button>
      <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
        🔗 Compartilhar
      </button>
      <button>✅ Confirmar presença</button>
    </div>
  );
}
