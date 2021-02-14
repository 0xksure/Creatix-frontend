import { Comment } from 'Components/Feedback/Comments/types';
interface Clap {
  id: string;
  userId: string;
}

export interface PostFeedback {
  title: string;
  description: string;
}

export interface FeedbackValues extends PostFeedback {
  id: string;
  createdAt: string;
  description: string;
  title: string;
  person: { id: string; firstname: string; lastname: string };
  comments: Array<Comment>;
  claps: Clap[];
}
