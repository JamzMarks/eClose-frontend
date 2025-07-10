// components/nav/NavButton.tsx
'use client'

import Link from 'next/link'
import React from 'react'

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
      className="w-full text-left hover:bg-gray-100 transition pl-3 py-1 flex items-center gap-2 cursor-pointer min-h-12"
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

export default NavButton
