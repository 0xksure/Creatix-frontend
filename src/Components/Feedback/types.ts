import { Comment } from 'Components/Feedback/Comments/types';
interface Clap {
  id: string;
  userId: string;
}

export interface Feedback {
  id: string;
  createdAt: string;
  description: string;
  title: string;
  person: { id: string; firstname: string; lastname: string };
  comments: Array<Comment>;
  claps: Clap[];
}
