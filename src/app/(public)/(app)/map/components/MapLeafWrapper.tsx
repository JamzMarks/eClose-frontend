'use client'

import dynamic from 'next/dynamic'

const MapLeaf = dynamic(() => import('./MapLeaf'), {
  ssr: false,
})

export default MapLeaf
