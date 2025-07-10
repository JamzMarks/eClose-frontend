'use client';

import { MessageCircle, Heart, Eye, Timer } from 'lucide-react';

interface PostInfoProps {
  likes?: number;
  comments?: number;
  views?: number;
  timeAgo?: string;
}

export const PostInfo = ({
  likes = 123,
  comments = 45,
  views = 789,
  timeAgo = '2h atrás',
}: PostInfoProps) => {
  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground px-1">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          {likes}
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          {comments}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {views}
        </span>
      </div>

      <span className='flex items-center gap-1'><Timer className="w-4 h-4"/>{timeAgo}</span>
    </div>
  );
};
