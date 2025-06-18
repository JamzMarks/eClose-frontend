'use client'
interface NavAuthModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const NavAuthModal = ({ open, setOpen }: NavAuthModalProps) => {
  return (
    <div className="relative">
      {open && (
        <div className="absolute top-full right-0 mt-3 z-50 w-64 bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-amber-600 mb-2">
              Meu Perfil
            </h2>
            <p className="text-sm text-gray-700">
              Aqui vão dados do usuário, configurações, etc.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavAuthModal;
