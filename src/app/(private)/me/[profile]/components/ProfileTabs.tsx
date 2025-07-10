// // components/profile/ProfileTabs.tsx
// 'use client'

// import { useState } from 'react'
// import EventList from './EventList'
// import ActivityFeed from './ActivityFeed'

// export default function ProfileTabs() {
//   const [activeTab, setActiveTab] = useState<'eventos' | 'participando' | 'atividades'>('eventos')

//   return (
//     <div>
//       <div className="flex border-b mb-4 gap-6">
//         {['eventos', 'participando', 'atividades'].map(tab => (
//           <button
//             key={tab}
//             className={`py-2 font-medium capitalize ${
//               activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
//             }`}
//             onClick={() => setActiveTab(tab as any)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div>
//         {activeTab === 'eventos' && <EventList title="Eventos Criados" />}
//         {activeTab === 'participando' && <EventList title="Participando de" />}
//         {activeTab === 'atividades' && <ActivityFeed />}
//       </div>
//     </div>
//   )
// }
