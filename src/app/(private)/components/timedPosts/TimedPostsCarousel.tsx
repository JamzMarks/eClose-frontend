'use client';

import { Play } from "lucide-react";

const mockReels = [
  {
    id: 1,
    user: "johndoe",
    videoUrl: "/videos/mock1.mp4",
    thumb: "/thumbs/thumb1.jpg",
    description: "Um momento incrível!",
  },
  {
    id: 2,
    user: "janedoe",
    videoUrl: "/videos/mock2.mp4",
    thumb: "/thumbs/thumb2.jpg",
    description: "Vibes do fim de semana 🏖️",
  },
  {
    id: 3,
    user: "someone",
    videoUrl: "/videos/mock3.mp4",
    thumb: "/thumbs/thumb3.jpg",
    description: "Confere isso!",
  },
  {
    id: 4,
    user: "someone",
    videoUrl: "/videos/mock3.mp4",
    thumb: "/thumbs/thumb3.jpg",
    description: "Confere isso!",
  },
  {
    id: 5,
    user: "someone",
    videoUrl: "/videos/mock3.mp4",
    thumb: "/thumbs/thumb3.jpg",
    description: "Confere isso!",
  },
  {
    id: 6,
    user: "someone",
    videoUrl: "/videos/mock3.mp4",
    thumb: "/thumbs/thumb3.jpg",
    description: "Confere isso!",
  },
];

export const TimedPostsCarousel = () => {
  return (
    <div className="w-full overflow-hidden mb-6">
      <div className="grid grid-cols-6 gap-4 overflow-x-auto scrollbar-hide">
        {mockReels.map((reel) => (
          <div
            key={reel.id}
            className="min-w-[50px] w-[50px] h-[50px] rounded-full overflow-hidden relative bg-black shadow-md flex-shrink-0"
          >
            <video
              src={reel.videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white">
              <p className="text-xs font-semibold">@{reel.user}</p>
            </div>
            <Play size={20} className="absolute top-2 right-2 text-white/70" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimedPostsCarousel;
