'use client'

import { useEffect, useState } from "react";
import { PostCard } from "../../../components/cards/postCard/PostCard";
import { useApiClients } from "@/context/ApiClientContext";

export const Feed = () => {
   const { postClient } = useApiClients();
    const [posts, setPosts] = useState();

    useEffect(() => {
      postClient.getPosts()
    })

  return (
    <div className="grid gap-4">
      <hr className="border-t border-bdneutral" />
      <PostCard
        username="james_dev"
        userAvatar="https://picsum.photos/200/300"
        date="16 de junho de 2025"
        content="Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀 mas minha role Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀"
        imageUrl="https://picsum.photos/200/300"
      />
      {/* <hr className="border-0 border-b-sm border-solid border-b-neutral-border-weak"/> */}
      <hr className="border-t border-bdneutral" />
      <PostCard
        username="james_dev"
        userAvatar="https://picsum.photos/200/300"
        date="16 de junho de 2025"
        content="Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀 Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀"
        imageUrl="https://picsum.photos/200/300"
      />
      <hr className="border-t border-bdneutral" />
      <PostCard
        username="james_dev"
        userAvatar="https://picsum.photos/200/300"
        date="16 de junho de 2025"
        content="Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀 Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀Trabalhando em um novo projeto incrível com Next.js e Tailwind! 🚀"
        imageUrl="https://picsum.photos/200/300"
      />
      <hr className="border-t border-bdneutral" />
    </div>
  );
};
