import { PostComment } from './comment';

export interface GroupPost {
  id: number;
  authorName: string;
  title: string;
  content: string;
  dateAdded: Date;
  isAuthor: boolean;
  comments: PostComment[];
}
