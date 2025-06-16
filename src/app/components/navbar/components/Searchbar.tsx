'use client'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form';

interface SearchData {
    search: string;
}
export const Searchbar = () => {
    const {register} = useForm<SearchData>()

    return(
        <div className="flex-1 mx-6 max-w-md">
        <div className="relative">
          <input
          {...register('search')}
            type="text"
            placeholder="Search"
            className="w-full rounded-full bg-neutral-900 pl-10 pr-4 py-2 border border-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#e17100]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={16} />
        </div>
      </div>
    )
}