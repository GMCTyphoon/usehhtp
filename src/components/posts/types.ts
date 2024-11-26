export interface Todo {
  title: string;
  id: string;
}

export interface TodoProps {
    onUserInput: (inputData: Todo) => void;
  }