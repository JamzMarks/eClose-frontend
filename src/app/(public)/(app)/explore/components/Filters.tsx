'use client'

import DateRangePickerWithInlineButtons from '@/utils/Date/DateRangePicker'
import { Calendar, MapPin, Users, Search, SlidersHorizontal, MapPinIcon, CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

enum Price{
  paid,
  free,
  all,
}

interface FiltersData{
  location?: string,
  date?: {
    start: Date,
    end?: Date
  }
  price?: Price,
}

export const ExploreFilters = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [filters, setFilters] = useState<FiltersData>({
    price: Price.all,
  })

  const handlePriceChange = (price: Price) => {
    setFilters(prev => ({ ...prev, price }))
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, location: e.target.value }))
  }

  const handleSearch = () => {
    console.log(filters)
    // aqui você faria a chamada da API com os filtros
  }
  const {register} = useForm<FiltersData>()

  return (
        <div className="bg-white text-black rounded-xl shadow-md p-4 flex flex-wrap items-center justify-between gap-4 mt-6 w-full max-w-6xl mx-auto">
      {/* Localização */}
      <div className="flex items-center gap-2">
        <MapPinIcon size={18} className="text-orange-600" />
        <input
          type="text"
          placeholder="Buscar por cidade, bairro ou online"
          className="outline-none border border-neutral-300 rounded-md px-3 py-2 text-sm w-56"
          value={filters.location ?? ''}
          onChange={handleLocationChange}
        />
      </div>

      {/* Data */}
      <div className="flex items-center gap-2">
        <CalendarIcon size={18} className="text-orange-600" />
        <input
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
          onChange={e => {
            const start = new Date(e.target.value)
            setFilters(prev => ({
              ...prev,
              date: { ...prev.date, start },
            }))
          }}
        />
        <span className="text-sm text-neutral-500">até</span>
        <input
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
          // onChange={e => {
          //   const end = new Date(e.target.value)
          //   setFilters(prev => ({
          //     ...prev,
          //     date: { ...prev.date, end },
          //   }))
          // }}
        />
      </div>

      {/* Preço */}
      <div className="flex items-center gap-3">
        {/* {(['all', 'free', 'paid'] as Price[]).map((type) => (
          <button
            key={type}
            onClick={() => handlePriceChange(type)}
            className={`px-4 py-2 rounded-full border text-sm transition 
              ${filters.price === type
                ? 'bg-orange-600 text-white border-orange-600'
                : 'border-neutral-300 text-neutral-700 hover:border-orange-400'}`}
          >
            {type === Price.all ? 'Todos' : type === Price.free ? 'Grátis' : 'Pagos'}
          </button>
        ))} */}
      </div>

      {/* Botão de busca */}
      <button
        onClick={handleSearch}
        className="bg-black cursor-pointer hover:bg-neutral-900 text-white px-5 py-2 rounded-full text-sm ml-auto"
      >
        Buscar eventos
      </button>
    </div>
  )
}

export default ExploreFilters
