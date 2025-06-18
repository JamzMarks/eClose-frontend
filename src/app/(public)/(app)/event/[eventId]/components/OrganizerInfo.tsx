export default function OrganizerInfo({ organizerId, organizerType }: { organizerId: string, organizerType: string }) {
  return (
    <div className="border-t pt-4 mt-4">
      <h2 className="font-semibold text-lg">Organizador</h2>
      <p>ID: {organizerId}</p>
      <p>Tipo: {organizerType}</p>
    </div>
  );
}
