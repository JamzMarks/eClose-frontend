export default function EventHeader({ event }: { event: any }) {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
      <img src={event.bannerUrl || "/default-banner.jpg"} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
        <h1 className="text-2xl font-bold">{event.name}</h1>
        <p>{event.isOnline ? "Online" : event.location}</p>
      </div>
    </div>
  );
}
