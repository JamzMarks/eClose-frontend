// components/nav/NavModalSection.tsx
import React from 'react'
import NavButton from './NavButton'


interface SectionItem {
  title: string
  linkTo?: string
  icon?: React.ElementType
  onClick?: () => void
}

interface NavModalSectionProps {
  title: string
  items: SectionItem[]
}

const NavModalSection = ({ title, items }: NavModalSectionProps) => (
  <div>
    <span className="text-xs uppercase text-gray-400 font-medium px-3">{title}</span>
    <ul className="mt-2 space-y-1">
      {items.map((item, i) => (
        <li key={i}>
          <NavButton {...item} />
        </li>
      ))}
    </ul>
  </div>
)

export default NavModalSection
