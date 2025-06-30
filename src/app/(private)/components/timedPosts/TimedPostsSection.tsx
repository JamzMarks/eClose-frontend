'use client';

import { PlayCircle } from "lucide-react";

const mockReels = [
  {
    id: 1,
    user: "johndoe",
    videoUrl: "/videos/mock1.mp4",
    description: "Curtam esse momento incrível!",
  },
  {
    id: 2,
    user: "janedoe",
    videoUrl: "/videos/mock2.mp4",
    description: "Vibes do fim de semana 🏖️",
  },
];

export const TimedPostsSection = () => {
  return (
    <div className="w-full grid gap-6">
      {mockReels.map((reel) => (
        <div
          key={reel.id}
          className="relative bg-black rounded-xl overflow-hidden shadow-md aspect-[9/16]"
        >
          <video
            src={reel.videoUrl}
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <p className="text-sm font-semibold">@{reel.user}</p>
            <p className="text-xs">{reel.description}</p>
          </div>
          <PlayCircle size={40} className="absolute top-2 right-2 text-white/70" />
        </div>
      ))}
    </div>
  );
};

export default TimedPostsSection;
