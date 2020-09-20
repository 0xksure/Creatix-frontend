interface Clap {
  id: string;
  userId: string;
}

export interface Feedback {
  id: string;
  createdAt: string;
  description: string;
  title: string;
  person: { firstname: string; lastname: string };
  claps: Clap[];
}
