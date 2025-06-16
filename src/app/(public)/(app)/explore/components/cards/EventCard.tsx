import React from "react";

type Event = {
  id: string;
  name: string;
  location: string;
  isOnline: boolean;
  isFree: boolean;
  ticketPrice: number;
  startDate?: Date;
  endDate?: Date;
  thumbnailUrl?: string;
  status: string;
  visibility: string;
};

export const EventCard = ({ event }: { event: Event }) => {
  const formatDate = (date?: Date) =>
    date ? new Date(date).toLocaleDateString("pt-BR") : "Data indefinida";

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-md hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={event.thumbnailUrl || "https://via.placeholder.com/150"}
          alt={event.name}
          className="w-20 h-20 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-lg font-semibold">{event.name}</h2>
          <p className="text-sm text-gray-500">
            {event.isOnline ? "Evento Online" : event.location}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </p>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            event.status === "published"
              ? "bg-green-100 text-green-800"
              : event.status === "draft"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {event.status.toUpperCase()}
        </span>
        <button className="text-blue-600 text-sm hover:underline">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};
