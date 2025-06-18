export default function EventDetails({ event }: { event: any }) {
  return (
    <div className="space-y-2">
      <p><strong>Data:</strong> {new Date(event.startDate).toLocaleString()} - {new Date(event.endDate).toLocaleString()}</p>
      {event.isFree ? <p>Evento gratuito</p> : <p>Preço: R$ {event.ticketPrice?.toFixed(2)}</p>}
      <p className="text-gray-700">{event.description}</p>
    </div>
  );
}
