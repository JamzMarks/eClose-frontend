'use client';

import { Image, FileText, Video, Send } from "lucide-react";
import { useState } from "react";

export const CreatePost = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("Post enviado:", content);
    setContent("");
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow border border-gray-200 mb-6">
      <textarea
        placeholder="Compartilhe algo com a comunidade..."
        className="w-full border-none resize-none outline-none text-sm p-2 bg-gray-50 rounded"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-3 text-gray-500">
          <button title="Imagem">
            <Image size={20} />
          </button>
          <button title="Texto">
            <FileText size={20} />
          </button>
          <button title="Vídeo">
            <Video size={20} />
          </button>
        </div>

        <button
          onClick={handlePost}
          className="flex items-center gap-1 text-sm bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded transition"
        >
          <Send size={16} />
          Publicar
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
