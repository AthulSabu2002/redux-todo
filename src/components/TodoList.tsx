import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice';
import type { Todo } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="text-center text-slate-500 my-8">No tasks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={(id) => dispatch(toggleTodo(id))}
            deleteTodo={(id) => dispatch(deleteTodo(id))}
            editTodo={(id, newText) => dispatch(editTodo({id, newText}))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}