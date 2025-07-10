'use client'

import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Switch
      checked={isDark}
      onChange={() => setTheme(isDark ? 'light' : 'dark')}
      className={`${
        isDark ? 'bg-gray-600' : 'bg-gray-300'
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span
        className={`${
          isDark ? 'translate-x-5' : 'translate-x-1'
        } inline-block h-3 w-3 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default ThemeToggle
