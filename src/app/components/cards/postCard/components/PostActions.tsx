import { Heart, MessageCircle, Share2 } from "lucide-react";


export const PostActions = () => {
    const buttonMain = 'bg-modal cursor-pointer flex items-center gap-1 w-full px-4 py-3 rounded-lg justify-center hover:bg-gray-100 '

  return (
    <div className="grid grid-cols-3 w-full justify-between text-sm gap-3">
      <button className={`${buttonMain} hover:text-red-500 transition `}>
        <Heart size={16} /> Curtir
      </button>
      <button className={`${buttonMain} hover:text-blue-500 transition`}>
        <MessageCircle size={16} /> Comentar
      </button>
      <button className={`${buttonMain} hover:text-green-500 transition`}>
        <Share2 size={16} /> Compartilhar
      </button>
    </div>
  );
};

export default PostActions;
