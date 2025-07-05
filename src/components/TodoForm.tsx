import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center bg-white rounded-md shadow-sm">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-4 outline-none bg-transparent text-slate-800 placeholder-slate-400 rounded-l-md border border-slate-200"
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-4 rounded-r-md transition-colors font-medium"
          disabled={!text.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;