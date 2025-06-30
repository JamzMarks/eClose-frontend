"use client";

import { useEffect, useState } from "react";
import { EventCard } from "./components/cards/EventCard";
import ExploreFilters from "./components/Filters";
import Pagination from "./components/Pagination";
import { ExploreType } from "./components/ExploreType";
import { ExploreBannerCarousel } from "./components/banner/ExploreBanner";
import ExploreFiltersForm from "./components/filters/ExploreFiltersForm";
import { ExploreFiltersModal } from "./components/filters/ExploreFiltersModal";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
};

export const mockEvents = [
  {
    id: "1",
    name: "Tech Conference 2025",
    location: "São Paulo, SP",
    isOnline: false,
    isFree: false,
    isPublic: true,
    ticketPrice: 150.00,
    ticketLimit: 500,
    startDate: new Date("2025-08-10T09:00:00"),
    endDate: new Date("2025-08-12T18:00:00"),
    bannerUrl: "https://picsum.photos/seed/picsum/200/300",
    thumbnailUrl: "https://picsum.photos/seed/picsum/200/300",
    status: 'published',
    visibility: 'public',
    description: "O maior evento de tecnologia do ano!",
    organizerId: "org123",
    organizerType: "company",
    admins: ["admin1", "admin2"],
  },
  {
    id: "2",
    name: "Workshop de IA",
    location: "",
    isOnline: true,
    isFree: true,
    isPublic: true,
    ticketPrice: 0,
    ticketLimit: 100,
    startDate: new Date("2025-07-01T14:00:00"),
    endDate: new Date("2025-07-01T17:00:00"),
    bannerUrl: "https://picsum.photos/seed/picsum/200/300",
    thumbnailUrl: "https://picsum.photos/seed/picsum/200/300",
    status: 'published',
    visibility: 'public',
    description: "Aprenda os fundamentos da inteligência artificial.",
    organizerId: "org456",
    organizerType: "individual",
    admins: ["admin3"],
  },
];

const MAX_EVENTS = 30;
const PAGE_SIZE = 10;

export const ExplorePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const mockQtd = 70;
  const mockItensPerPage= 18;

  useEffect(() => {
    if (!hasMore) return;
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore || loading) return;

      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;

      if (scrollY + viewHeight >= height - 100) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div className=''>
    <ExploreBannerCarousel></ExploreBannerCarousel>
    <div className="px-6 py-4 min-h-screen max-w-[1240px] mx-auto">
      <ExploreType></ExploreType>
      {/* <ExploreFilters></ExploreFilters> */}
      <ExploreFiltersModal />
      <div className="hidden md:block">
        <ExploreFiltersForm />
        
      </div>
    {/* <DateRangePickerWithInlineButtons/> */}
      {/* Events */}
      <div className="my-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockEvents.map((event) => {
            const cards = [];
            for(let i = 0; i < 5; i++){
              cards.push(<EventCard key={(event.id + i)} event={event} />)
            }    
            return cards      
          }
            
            
          )}
        </div>
        <Pagination qtd={mockQtd} itemPerPage={mockItensPerPage}></Pagination>
      </div>

      <div className="mt-6 flex justify-center">
        {loading && <p>Carregando...</p>}
        {!hasMore && (
          <p className="text-neutral-500">
            Fim dos resultados. Veja mais na próxima página.
          </p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ExplorePage;
