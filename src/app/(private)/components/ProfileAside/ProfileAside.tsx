'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Home, Calendar, Bookmark, Bell, User } from "lucide-react";

export const ProfileAside = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  const menuItems = [
    { label: "Meu Perfil", icon: Home, action: () => router.push("/feed") },
    { label: "Meus Eventos", icon: Calendar, action: () => router.push("/my-events") },
    { label: "Salvos", icon: Bookmark, action: () => router.push("/saved") },
    { label: "Notificações", icon: Bell, action: () => router.push("/notifications") },
    { label: "Sair", icon: User, action: () => router.push("/profile") },
  ];

  return (
<aside className="w-full md:w-72 bg-white md:bg-transparent p-4 shadow md:shadow-none flex md:flex-col gap-4 items-center md:items-start border border-gray-200 rounded-xl h-fit">
    {/* <aside> */}
      {menuItems.map(({ label, icon: Icon, action }) => (
        <button
          key={label}
          onClick={action}
          className="cursor-pointer w-full justify-center md:w-auto flex items-center gap-2 text-gray-800 hover:text-amber-600 transition text-sm font-medium"
        >
          <Icon size={20} className="align-middle"/>
          <span className="hidden md:inline">{label}</span>
        </button>
      ))}
    </aside>
  );
};

export default ProfileAside;
