interface Person {
  firstname: string;
  lastname: string;
}

export interface Comment {
  id: string;
  userId: string;
  feedbackId: string;
  comment: string;
  person: Person;
}
