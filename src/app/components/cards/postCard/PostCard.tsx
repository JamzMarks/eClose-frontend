"use client";

import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

type PostCardProps = {
  username: string;
  userAvatar: string;
  date: string;
  content: string;
  imageUrl?: string;
};

export const PostCard = ({
  username,
  userAvatar,
  date,
  content,
  imageUrl,
}: PostCardProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white shadow-sm rounded-xl w-full  space-y-4 border border-gray-200">
    <div className="px-4 pt-4">
      {/* Header */}
      <div className="flex items-center gap-3 ">
        <Image
          src={userAvatar}
          alt={`${username} avatar`}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
      <p
        className={`text-sm text-gray-800 ${
          expanded ? '' : 'line-clamp-1'
        } transition-all duration-300`}
      >
        {content}
      </p>
    </div>
      {!expanded && (
        <span
          onClick={() => setExpanded(true)}
          className="text-sm text-gray-500 cursor-pointer hover:underline hover:text-amber-600"
        >
          mais
        </span>
      )}
    </div>

      {/* Image (optional) */}
      {imageUrl && (
        <div className="w-full min-h-[555px] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt="Post image"
            fill
          />
        </div>
      )}

      {/* Footer - Actions */}
      <div className="flex justify-between text-gray-600 text-sm px-4 pb-4">
        <button className=" cursor-pointer flex items-center gap-1 hover:text-red-500 transition">
          <Heart size={16} /> Curtir
        </button>
        <button className=" cursor-pointer flex items-center gap-1 hover:text-blue-500 transition">
          <MessageCircle size={16} /> Comentar
        </button>
        <button className=" cursor-pointer flex items-center gap-1 hover:text-green-500 transition">
          <Share2 size={16} /> Compartilhar
        </button>
      </div>
    </div>
  );
};
