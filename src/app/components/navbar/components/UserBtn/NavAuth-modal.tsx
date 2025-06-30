'use client'

import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HelpCircle, LogOut } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'

interface NavAuthModalProps {
  open: boolean
  setOpen: (value: boolean) => void
}

interface NavButtonProps {
  title: string
  linkTo?: string
  icon?: React.ElementType
  onClick?: () => void
}

const NavButton = ({ title, icon: Icon, linkTo, onClick }: NavButtonProps) => {
  const content = (
    <div
      onClick={onClick}
      className="w-full text-left hover:bg-gray-100 transition pl-3 py-1 flex items-center gap-2 cursor-pointer"
    >
      {Icon && <Icon size={16} className="text-gray-500" />}
      {title}
    </div>
  )

  return linkTo ? (
    <Link href={linkTo} onClick={onClick}>
      {content}
    </Link>
  ) : (
    content
  )
}

const NavAuthModal = ({ open, setOpen }: NavAuthModalProps) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: ROUTES.HOME })
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="absolute top-full right-0 mt-3 z-50 min-w-52 max-w-56 bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in py-3">
      <nav className="flex flex-col space-y-4 text-md text-gray-700">
        {/* Acesso ou Conta */}
        {!session?.user ? (
          <>
            <div>
              <span className="text-xs uppercase text-gray-400 font-medium px-3">Acesso</span>
              <ul className="space-y-1">
                <li>
                  <NavButton linkTo={ROUTES.AUTH.SIGNIN} title="Entrar" onClick={() => setOpen(false)} />
                </li>
                <li>
                  <NavButton linkTo={ROUTES.AUTH.SIGNUP} title="Cadastrar" onClick={() => setOpen(false)} />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="text-xs uppercase text-gray-400 font-medium px-3">Conta</span>
              <ul className="space-y-1 mt-2">
                <li>
                  <NavButton title="Sair" icon={LogOut} onClick={handleSignOut} />
                </li>
              </ul>
            </div>
          </>
        )}

        <hr className="border-t border-gray-200 mx-3" />

        {/* Ajuda */}
        <div>
          <span className="text-xs uppercase text-gray-400 font-medium px-3">Ajuda</span>
          <ul className="mt-2 space-y-1">
            <li>
              <NavButton title="Recuperar senha" linkTo={ROUTES.HELP} onClick={() => setOpen(false)} />
            </li>
            <li>
              <NavButton title="Central de ajuda" linkTo={ROUTES.HELP} icon={HelpCircle} onClick={() => setOpen(false)} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavAuthModal
