"use client";

import { useSession, signOut } from "next-auth/react";
import { ROUTES } from "@/constants/routes";
import { LogOut, HelpCircle, Bell, Settings, Moon, User } from "lucide-react";
import NavModalSection from "./NavModalSection";
import ThemeToggle from "./ThemeToggle"; // Suporte para dark mode toggle (componente que você pode criar)

interface NavAuthModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NavAuthModal = ({ open, setOpen }: NavAuthModalProps) => {
  const { data: session } = useSession();

  if (!open) return null;

  const handleSignOut = () => {
    signOut({ callbackUrl: ROUTES.HOME });
    setOpen(false);
  };

  return (
    // <div className="absolute top-full right-0 mt-2 z-50 min-w-60 max-w-64 bg-white rounded-md shadow-lg border border-gray-200 animate-fade-in py-3 dark:bg-gray-900 dark:border-gray-700">
    <div
      className="absolute top-full right-0 mt-2 z-50 min-w-60 max-w-64 
      bg-modal rounded-md shadow-lg 
        animate-fade-in py-3 "
    >
      <nav className="flex flex-col space-y-4 text-md text-foreground dark:text-foreground">
        {session?.user ? (
          <>
            <ProfileSection
              name={session.user.name}
              email={session.user.email}
              image={session.user.image}
            />

            <NavModalSection
              title="Perfil"
              items={[
                {
                  title: "Meu Perfil",
                  icon: User,
                  linkTo: ROUTES.PROFILE(session.user.id),
                  onClick: () => setOpen(false),
                },
                {
                  title: "Notificações",
                  icon: Bell,
                  linkTo: ROUTES.ACCOUNT.NOTIFICATIONS,
                  onClick: () => setOpen(false),
                },
              ]}
            />

            <div className="px-3">
              <div className="flex items-center gap-2 text-sm py-1">
                <Moon size={16} className="text-gray-500 dark:text-gray-400" />
                <ThemeToggle />
              </div>
            </div>

            <NavModalSection
              title="Conta"
              items={[
                {
                  title: "Configurações",
                  icon: Settings,
                  linkTo: ROUTES.ACCOUNT.SETTINGS,
                  onClick: () => setOpen(false),
                },
                { title: "Sair", icon: LogOut, onClick: handleSignOut },
              ]}
            />
          </>
        ) : (
          <>
            <NavModalSection
              title="Acesso"
              items={[
                {
                  title: "Entrar",
                  linkTo: ROUTES.AUTH.SIGNIN,
                  onClick: () => setOpen(false),
                },
                {
                  title: "Cadastrar",
                  linkTo: ROUTES.AUTH.SIGNUP,
                  onClick: () => setOpen(false),
                },
              ]}
            />

            <hr className="border-t border-gray-200 dark:border-gray-700 mx-3" />

            <NavModalSection
              title="Ajuda"
              items={[
                {
                  title: "Problemas de acesso",
                  linkTo: ROUTES.HELP,
                  onClick: () => setOpen(false),
                },
                {
                  title: "Ajuda e suporte",
                  linkTo: ROUTES.HELP,
                  icon: HelpCircle,
                  onClick: () => setOpen(false),
                },
              ]}
            />
          </>
        )}
      </nav>
    </div>
  );
};

export default NavAuthModal;

// Componente local interno
const ProfileSection = ({
  name,
  email,
  image,
}: {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}) => {
  return (
    <div className="px-3 pb-3 border-b border-bdneutral">
      <div className="flex items-center gap-3">
        {image && (
          <img src={image} alt="Avatar" className="w-9 h-9 rounded-full" />
        )}
        <div className="flex flex-col">
          {name && <span className="text-sm font-medium truncate">{name}</span>}
          {email && <span className="text-xs truncate">{email}</span>}
        </div>
      </div>
    </div>
  );
};
