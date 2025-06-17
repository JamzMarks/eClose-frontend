'use client'

import { CalendarDays, Landmark, Users } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'


const OPTIONS = [
  { id: 'event', label: 'Eventos', icon: CalendarDays },
  { id: 'venue', label: 'Locais', icon: Landmark },
  { id: 'organizer', label: 'Organizadores', icon: Users },
] as const

type ExploreType = (typeof OPTIONS)[number]['id']

export const ExploreType = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selected, setSelected] = useState<ExploreType>();

    useEffect(() => {
        const current = searchParams.get('type') as ExploreType | null;
        setSelected(current as ExploreType);
    }, []);

    const handleChange = (type: ExploreType) => {
        const params = new URLSearchParams(searchParams);
        params.set('type', type);
        router.replace(`?${params.toString()}`);
        setSelected(type);
    }

    return (
        <div className="flex justify-around gap-2 mt-4 sm:gap-4 sm:justify-center">
        {OPTIONS.map(({ id, label, icon: Icon }) => (
            <label
            key={id}
            htmlFor={id}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg border text-sm cursor-pointer transition-all w-full max-w-[100px] sm:max-w-[120px]
                ${
                selected === id
                    ? 'bg-amber-600 text-white border-amber-600 shadow'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                }`}
            >
            <Icon size={22} className="mb-1" />
            {label}
            <input
                type="radio"
                id={id}
                name="exploretype"
                value={id}
                checked={selected === id}
                onChange={() => handleChange(id)}
                className="hidden"
            />
            </label>
        ))}
        </div>
  )
}

export default ExploreType
