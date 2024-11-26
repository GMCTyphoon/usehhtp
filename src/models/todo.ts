class Todo {
  id: string;
  title: string;

  constructor(todoText: string) {
    this.title = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
