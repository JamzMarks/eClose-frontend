// src/app/(public)/(app)/map/components/MapLeaf.tsx
'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { blueMark, redMark } from './MapMarks'


const MapLeaf = () => {
  return (
    <MapContainer center={[-23.503, -46.878]} zoom={14} 
        scrollWheelZoom={true} 
        className="rounded-lg shadow-md z-10"
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>, 
                    &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>, 
                    &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />

      {/* Venue: marcador vermelho */}
      <Marker position={[51.505, -0.09]} icon={redMark}>
        <Popup>Venue (Local)</Popup>
      </Marker>

      {/* Evento: marcador azul */}
      <Marker position={[51.51, -0.1]} icon={blueMark}>
        <Popup>Evento</Popup>
      </Marker>
      <ZoomControl position="topright" />
    </MapContainer>
  )
}

export default MapLeaf
