export interface Comment {
  id: string;
  writer: string;
  content: string;
  createAt: string;
  isOwner?: boolean;
  icon?: string | null;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  writer: string;
  createAt: string;
  icon?: string | null;
  comments: Comment[];
  isAdmin?: boolean;
}
