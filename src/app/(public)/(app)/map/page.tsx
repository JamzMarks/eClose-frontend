// src/app/(public)/(app)/map/page.tsx
import MapLeafWrapper from './components/MapLeafWrapper'

export default function MapPage() {
    console.log('renderizou')
  return (
    <section className="p-4 grid grid-cols-2 h-[600px]">
      <div className="mb-8">
        <p>Outros conteúdos da página aqui...</p>
      </div>

      <div className='rounded-2xl'>
        <MapLeafWrapper />
      </div>
    </section>
  )
}
