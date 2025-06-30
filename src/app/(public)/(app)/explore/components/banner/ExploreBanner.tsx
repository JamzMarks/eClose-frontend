"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const ExploreBannerCarousel = () => {
   const featuredEvents = [
  {
    id: "101",
    name: "Festival de Música Indie 2025",
    location: "Belo Horizonte, MG",
    isOnline: false,
    isFree: false,
    isPublic: true,
    ticketPrice: 90.00,
    ticketLimit: 800,
    startDate: new Date("2025-09-15T16:00:00"),
    endDate: new Date("2025-09-17T23:00:00"),
    bannerUrl: "https://picsum.photos/seed/indiefestival/1200/600",
    thumbnailUrl: "https://picsum.photos/seed/indiefestival/400/300",
    status: "published",
    visibility: "public",
    description: "Três dias de muita música, arte e cultura alternativa.",
    organizerId: "org789",
    organizerType: "company",
    admins: ["admin5"],
  },
  {
    id: "102",
    name: "Feira Criativa Online",
    location: "",
    isOnline: true,
    isFree: true,
    isPublic: true,
    ticketPrice: 0,
    ticketLimit: 200,
    startDate: new Date("2025-08-05T10:00:00"),
    endDate: new Date("2025-08-05T18:00:00"),
    bannerUrl: "https://picsum.photos/seed/feiracriativa/1200/600",
    thumbnailUrl: "https://picsum.photos/seed/feiracriativa/400/300",
    status: "published",
    visibility: "public",
    description: "Explore talentos criativos, participe de oficinas e compre de artistas independentes.",
    organizerId: "org320",
    organizerType: "individual",
    admins: ["admin8"],
  },
  {
    id: "103",
    name: "Startup Talks Rio",
    location: "Rio de Janeiro, RJ",
    isOnline: false,
    isFree: false,
    isPublic: true,
    ticketPrice: 120.00,
    ticketLimit: 300,
    startDate: new Date("2025-07-22T09:30:00"),
    endDate: new Date("2025-07-22T18:00:00"),
    bannerUrl: "https://picsum.photos/seed/startuptalks/1200/600",
    thumbnailUrl: "https://picsum.photos/seed/startuptalks/400/300",
    status: "published",
    visibility: "public",
    description: "Encontros, palestras e networking com grandes nomes do ecossistema de startups.",
    organizerId: "org901",
    organizerType: "company",
    admins: ["admin10"],
  },
];


  return (
    <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {featuredEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="relative w-full h-full">
              <img
                src={event.bannerUrl}
                alt={event.name}
                className="w-full h-full object-cover brightness-[0.5]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {event.name}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-sm">
                  {event.description}
                </p>
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-neutral-100 transition">
                  Ver detalhes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
