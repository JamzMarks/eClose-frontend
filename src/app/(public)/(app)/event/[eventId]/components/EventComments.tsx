'use client'
import { useState } from "react";

export default function EventComments({ eventId }: { eventId: string }) {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addComment = () => {
    if (input) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">Comentários</h3>
      <div className="space-y-2 mt-2">
        {comments.map((c, i) => <p key={i} className="text-sm bg-gray-100 p-2 rounded">{c}</p>)}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Escreva um comentário..."
        />
        <button onClick={addComment} className="bg-blue-500 text-white px-3 py-1 rounded">Enviar</button>
      </div>
    </div>
  );
}
