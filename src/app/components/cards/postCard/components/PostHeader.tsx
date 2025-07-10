import Image from "next/image";

interface PostHeaderProps{
    username: string;
    userAvatar: string;
    date: string;
}

export const PostHeader = ({username, userAvatar, date}: PostHeaderProps) => {
    return (
        <div className="flex items-center gap-3 ">
          <div className="w-13 h-13 relative">
            <Image
              src={userAvatar}
              alt={`${username} avatar`}
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold text-sm">{username}</p>
            <p className="text-xs">{date}</p>
          </div>
        </div>
    )
}

export default PostHeader;