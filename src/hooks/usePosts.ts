import { useApiClients } from "@/context/ApiClientContext";

interface CreatePostDto {
  authorId: string;
  content: string;
  visibility?: 'PUBLIC' | 'PRIVATE' | 'FOLLOWERS';
}

export const usePosts = () => {
  const { postClient } = useApiClients();

  const fetchPostsByAuthor = (authorId: string) => {
    return postClient.getPostsByAuthor(authorId);
  };

  const createPost = (data: CreatePostDto) => {
    return postClient.createPost(data);
  };

  return {
    fetchPostsByAuthor,
    createPost,
    // etc.
  };
};


