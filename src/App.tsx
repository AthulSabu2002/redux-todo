import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButton';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
};

type Filter = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg border-2 border-slate-200 shadow-lg">
        <div className="px-8 py-10">
          <h1 className="text-3xl font-semibold text-center text-slate-800 mb-8">
            Tasks
          </h1>
          <TodoForm addTodo={addTodo} />
          <FilterButtons filter={filter} setFilter={setFilter} />
          <TodoList 
            todos={filteredTodos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
          <div className="text-sm text-slate-500 text-center mt-8">
            {todos.filter(todo => !todo.completed).length} tasks remaining
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;