import { motion } from 'framer-motion';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="flex items-center justify-between bg-white p-4 rounded-md border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 accent-slate-800 rounded-sm cursor-pointer border-2 border-slate-300"
        />
        <span
          className={`text-slate-800 ${
            todo.completed ? 'line-through text-slate-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 text-slate-400 hover:text-red-600 transition-colors focus:outline-none"
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </motion.div>
  );
};

export default TodoItem;