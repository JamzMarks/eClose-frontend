"use client";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

interface SearchData {
  search: string;
}

export const Searchbar = () => {
  const { register, handleSubmit, reset } = useForm<SearchData>();

  const handleSearch = (data: SearchData) => {
    console.log(data)
    reset()
  }


  return (
    <div className="flex-1 mx-6 max-w-2xl">
      <form className="relative" onSubmit={handleSubmit(handleSearch)}>
        <input
          {...register("search")}
          type="text"
          placeholder="Search"
          className="w-2/3 rounded-full pl-10 pr-4 py-2 border border-neutral-200 
                     placeholder-neutral-400 focus:outline-none 
                     focus:w-full transition-all duration-200 ease-in-out"
        />
        <button className="cursor-pointe" type="submit">
          <Search
            className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
            size={16}
            />
        </button>
      </form>
    </div>
  );
};
