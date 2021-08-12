export   interface Idex {
  item: {
    id: number,
    completed: boolean,
    item: string | number,
  };
  updateTodo: Function;
  removeTodo: Function;
  completeTodo: Function;
}
