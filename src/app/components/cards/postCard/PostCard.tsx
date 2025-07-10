import Image from "next/image";

import { PostContent } from "./components/PostContent";
import {PostHeader} from "./components/PostHeader";
import {PostActions} from './components/PostActions'
import { PostInfo } from "./components/PostInfo";

type PostCardProps = {
  username: string;
  userAvatar: string;
  date: string;
  content: string;
  imageUrl?: string;
};

export const PostCard = ({
  username,
  userAvatar,
  date,
  content,
  imageUrl,
}: PostCardProps) => {

  return (
    <article className="rounded-xl w-full space-y-4 px-4">
      <div className="">
        <PostHeader username={username} userAvatar={userAvatar} date={date}/>
        <PostContent content={content}/>
      </div>
      

      {/* Image (optional) */}
      {imageUrl && (
        <div className="w-full min-h-[450px] relative overflow-hidden rounded-md">
          <Image src={imageUrl} alt="Post image" fill />
        </div>
      )}
      {/* Post Info - default value */}
      <PostInfo />

      {/* Footer - Actions */}
      <PostActions/>
    </article>
  );
};

export default PostCard;