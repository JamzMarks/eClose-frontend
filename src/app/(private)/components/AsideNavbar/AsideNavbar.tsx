"use client";

import { useRouter } from "next/navigation";
import {
  Home,
  Calendar,
  Bookmark,
  Bell,
  User,
  User2,
  LogOut,
  CirclePlus,
  LucideProps,
} from "lucide-react";
import { CreatePostModal } from "../createPostModal/CreatePostModal";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

export const AsideNavbar = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState<boolean>(false);

  interface Items {
    label: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    action: () => void;
  }

  const menuItems: Items[] = [
    { label: "Feed", icon: Home, action: () => router.push("/feed") },
    {
      label: "Meu Perfil",
      icon: User2,
      action: () => router.push("/me/profile"),
    },
    {
      label: "Explore Eventos",
      icon: Calendar,
      action: () => router.push("/explore"),
    },
    {
      label: "Meus Eventos",
      icon: Calendar,
      action: () => router.push("/my-events"),
    },
    {
      label: "Criar Eventos",
      icon: Calendar,
      action: () => router.push("/events/create"),
    },
    { label: "Salvos", icon: Bookmark, action: () => router.push("/saved") },
    {
      label: "Notificações",
      icon: Bell,
      action: () => router.push("/notifications"),
    },
    { label: "Criar", icon: CirclePlus, action: () => setShowModal(true) },
  ];

  return (
    <aside className="h-auto w-16 xl:w-56 flex flex-col p-2 xl:p-4 top-14 overflow-y-auto">
      {menuItems.map(({ label, icon: Icon, action }) => (
        <button
          key={label}
          onClick={action}
          className="
            group flex items-center xl:justify-start justify-center gap-2 xl:gap-3
            p-3 rounded-md transition-all duration-200 ease-in-out
            text-foreground hover:bg-amber-100 hover:text-amber-700
            text-xs xl:text-sm font-medium cursor-pointer
          "
        >
          <Icon
            size={20}
            className="text-inherit transition-transform duration-200 group-hover:scale-110"
          />
          <span className="hidden xl:inline">{label}</span>
        </button>
      ))}
      
      <CreatePostModal
        setShowModal={setShowModal}
        showModal={showModal}
      ></CreatePostModal>

    </aside>
  );
};

export default AsideNavbar;

// className="
//   sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between  z-50 p-6
//   lg:sticky lg:top-4 lg:w-72
//   lg:border
//   lg:border-gray-200
//   lg:shadow-none
//   lg:flex-col
//   lg:justify-start
//   lg:items-start
//   lg:min-h-[calc(100vh-2rem)]
//   lg:gap-10
// "
