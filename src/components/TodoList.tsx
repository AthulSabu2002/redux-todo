import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;