import { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center bg-white rounded-md border-2 border-slate-300 shadow-sm">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-4 outline-none bg-transparent text-slate-800 placeholder-slate-400"
          data-testid="todo-input"
        />
        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-4 transition-colors font-medium"
          disabled={!text.trim()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;