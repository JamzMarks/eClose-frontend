
// import { useEffect, useState } from "react";
import EventHeader from "./components/EventHeader";
import EventActions from "./components/EventActions";
import EventDetails from "./components/EventDetails";
import OrganizerInfo from "./components/OrganizerInfo";
import EventComments from "./components/EventComments";
import { useRouter } from "next/navigation";


interface Event {
  id: string;
  name: string;
  location: string;
  isOnline: boolean;
  isFree: boolean;
  isPublic: boolean;
  ticketPrice: number;
  ticketLimit: number;
  startDate: string;
  endDate: string;
  bannerUrl: string;
  thumbnailUrl: string;
  status: string;
  visibility: string;
  description: string;
  organizerId: string;
  organizerType: string;
  admins: string[];
}

export  const EventPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [event, setEvent] = useState<Event | null>(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/events/${id}`)
//         .then((res) => res.json())
//         .then((data) => setEvent(data))
//         .catch(console.error);
//     }
//   }, [id]);

//   if (!event) return <p>Carregando evento...</p>;
const event = {
  id: "1a2b3c4d-5678-9012-3456-abcdefabcdef",
  name: "Tech Festival 2025",
  location: "Avenida Paulista, São Paulo - SP",
  isOnline: false,
  isFree: false,
  isPublic: true,
  ticketPrice: 99.9,
  ticketLimit: 500,
  startDate: "2025-07-10T18:00:00.000Z",
  endDate: "2025-07-12T22:00:00.000Z",
  bannerUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
  thumbnailUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
  status: "published", // EventStatus
  visibility: "public", // EventVisibility
  description: `O Tech Festival 2025 reúne grandes nomes da tecnologia para três dias de palestras, workshops e networking. 
  Garanta seu ingresso para conhecer as tendências de IA, Web3, DevOps, e mais.`,
  organizerId: "org123",
  organizerType: "company",
  admins: ["admin1", "admin2"]
};

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <EventHeader event={event} />
      <EventActions eventId={event.id} />
      <EventDetails event={event} />
      <OrganizerInfo organizerId={event.organizerId} organizerType={event.organizerType} />
      <EventComments eventId={event.id} />
    </div>
  );
}

export default EventPage;
