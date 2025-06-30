"use client";

import { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import NavAuthModal from "./NavAuth-modal";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileModalButton() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleModal = () => setOpen((prev) => !prev);

  // Fecha o modal ao clicar fora do botão/modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={handleModal}
        className="cursor-pointer flex items-center justify-center w-10 h-10 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md"
        aria-label={session?.user ? "Abrir perfil" : "Abrir menu de login"}
      >
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt="Avatar do usuário"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        ) : (
          <User size={20} />
        )}
      </button>

      {/* Dropdown/modal */}
      <NavAuthModal open={open} setOpen={setOpen}/>
    </div>
  );
}
