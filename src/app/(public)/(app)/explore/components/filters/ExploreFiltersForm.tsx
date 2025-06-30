"use client";

import { MapPinIcon, CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

enum Price {
  paid = "paid",
  free = "free",
  all = "all",
}

interface FiltersData {
  location?: string;
  date?: {
    start: Date;
    end?: Date;
  };
  price?: Price[];
}

export default function ExploreFiltersForm({
  onSubmitCallback,
}: {
  onSubmitCallback?: () => void;
}) {
  const { register, handleSubmit, reset } = useForm<FiltersData>();

  const onSubmit = (data: FiltersData) => {
    console.log("Filtros aplicados:", data);
    reset();
    onSubmitCallback?.();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Localização */}
      <div className="flex items-center gap-2">
        <MapPinIcon size={18} className="text-orange-600" />
        <input
          {...register("location")}
          type="text"
          placeholder="Buscar por estado, cidade ou bairro"
          className="outline-none border border-neutral-300 rounded-md px-3 py-2 text-sm w-full"
        />
      </div>

      {/* Data */}
      <div className="flex items-center gap-2">
        <CalendarIcon size={18} className="text-orange-600" />
        <input
          {...register("date.start")}
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
        />
        <span className="text-sm text-neutral-500">até</span>
        <input
          {...register("date.end")}
          type="date"
          className="border border-neutral-300 rounded-md px-2 py-2 text-sm text-neutral-700"
        />
      </div>

      {/* Preço */}
      <div className="flex flex-wrap gap-2">
        {(Object.values(Price) as Price[]).map((type) => (
          <div key={type}>
            <input
              {...register("price")}
              type="checkbox"
              className="hidden"
              id={type}
            />
            <label
              htmlFor={type}
              className={`px-4 py-2 border rounded-full text-sm cursor-pointer`}
            >
              {type === Price.all ? "Todos" : type === Price.free ? "Grátis" : "Pagos"}
            </label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-full text-sm mt-2"
      >
        Buscar eventos
      </button>
    </form>
  );
}
