import { HttpClient } from "../infra/HttpClient";

interface Post {
  id: string;
  authorId: string;
  content: string;
  visibility: 'PUBLIC' | 'PRIVATE' | 'FOLLOWERS';
  createdAt: string;
  updatedAt: string;
}

interface CreatePostDto {
  authorId: string;
  content: string;
  visibility?: 'PUBLIC' | 'PRIVATE' | 'FOLLOWERS';
}

interface UpdatePostDto {
  content?: string;
  visibility?: 'PUBLIC' | 'PRIVATE' | 'FOLLOWERS';
}

export class PostClient {
  private client: HttpClient;

  constructor(baseURL: string, token: string | null = null) {
    this.client = new HttpClient(baseURL, token);
  }
  
  async createPost(data: CreatePostDto): Promise<Post> {
    const res = await this.client.post<Post>('/posts', data);
    return res.data;
  }
  async getPosts(): Promise<Post[]> {
    // const res = await this.client.get<Post[]>(`/posts`);
    return []
    // return res.data;
  }

  async getPostById(id: string): Promise<Post> {
    const res = await this.client.get<Post>(`/posts/${id}`);
    return res.data;
  }

  async getPostsByAuthor(authorId: string): Promise<Post[]> {
    const res = await this.client.get<Post[]>(`/posts/user/${authorId}`);
    return res.data;
  }

  async updatePost(id: string, data: UpdatePostDto): Promise<Post> {
    const res = await this.client.put<Post>(`/posts/${id}`, data);
    return res.data;
  }

  async deletePost(id: string): Promise<void> {
    await this.client.delete(`/posts/${id}`);
  }

  setToken(token: string) {
    this.client.setToken(token);
  }
}
