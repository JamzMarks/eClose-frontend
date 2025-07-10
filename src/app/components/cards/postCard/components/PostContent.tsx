"use client";
import { useState } from "react";

interface PostContentProps {
    content: String;
}


export const PostContent = (props: PostContentProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {/* Content */}
      <div className="mt-4">
        <p
          className={`text-sm  ${
            expanded ? "" : "line-clamp-1"
          } transition-all duration-300`}
        >
          {props.content}
        </p>
      </div>
      {!expanded && (
        <span
          onClick={() => setExpanded(true)}
          className="text-sm text-gray-500 cursor-pointer hover:underline hover:text-amber-600"
        >
          mais
        </span>
      )}
    </div>
  );
};

export default PostContent;
