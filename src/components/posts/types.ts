export interface Todo {
  title: string;
  id: string;
}

export interface TodoProps {
  onUserInput: ({ id, title }: Todo) => void;
}
