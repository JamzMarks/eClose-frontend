'use client'
import { useState } from 'react'
import { User } from 'lucide-react'
import NavAuthModal from './NavAuth-modal'

export default function ProfileModalButton() {
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(prev => !prev);
  }

  return (
    <div className='relative'>
      {/* Botão com ícone de perfil */}
      <button
        onClick={handleModal}
        className=" cursor-pointer flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md"
      >
        <User size={20} />
        {/* <span className="font-medium">Perfil</span> */}
      </button>
      <NavAuthModal open={open} setOpen={setOpen}></NavAuthModal>
    </div>
  )
}
