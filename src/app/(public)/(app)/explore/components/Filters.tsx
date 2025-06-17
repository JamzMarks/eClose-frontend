"use client";

import {
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

enum Price {
  paid = 'paid',
  free = 'free',
  all = 'all',
}

interface FiltersData {
  location?: string;
  date?: {
    start: Date;
    end?: Date;
  };
  price?: Price[];
}

export const ExploreFilters = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { register, watch, control, handleSubmit, reset } = useForm<FiltersData>();
  const handleSearch = (data: FiltersData) => {
    console.log(data);
    reset();
  }
  return (
    <form className="bg-white text-black rounded-xl shadow-md p-4 flex flex-wrap items-center justify-between gap-4 mt-6 w-full mx-auto"
    onSubmit={handleSubmit(handleSearch)}>
      {/* Localização */}
      <div className="flex items-center gap-2">
        <MapPinIcon size={18} className="text-orange-600" />
        <input
          {...register("location")}
          type="text"
          placeholder="Buscar por estado, cidade ou bairro"
          className="outline-none border border-neutral-300 rounded-md px-3 py-2 text-sm w-56"
        />
      </div>

      {/* Data */}
      <div className="flex items-center gap-2">
        <CalendarIcon size={18} className="text-orange-600" />
        <input
          {...register('date.start')}
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
        />
        <span className="text-sm text-neutral-500">até</span>
        <input
          {...register('date.end')}
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
        />
      </div>

      {/* Preço */}
      <div className="flex items-center gap-3">
        {(Object.values(Price) as Price[]).map((type) => {
          // console.log(Object.values(Price))
        return(

        
        <div key={type}>
          <input
            {...register('price')}
            type="checkbox"
            className="hidden"
            id={type.toString()}
            name={type.toString()}
          />
          <label
            htmlFor={type.toString()}
            className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer`}
          >
            {type === Price.all ? 'Todos' : type === Price.free ? 'Grátis' : 'Pagos'}
          </label>
        </div>)
      })}
      </div>

      {/* Botão de busca */}
      <button
        type="submit"
        className="bg-black cursor-pointer hover:bg-neutral-900 text-white px-5 py-2 rounded-full text-sm ml-auto"
      >
        Buscar eventos
      </button>
    </form>
  );
};

export default ExploreFilters;
