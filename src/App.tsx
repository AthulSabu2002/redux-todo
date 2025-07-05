import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButton';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-800 mb-8">
          Tasks
        </h1>
        <div className="flex flex-col gap-6 mb-8">
          <TodoForm />
          <div className="flex justify-center">
            <FilterButtons />
          </div>
        </div>
        <TodoList todos={filteredTodos} />
        <div className="text-sm text-slate-500 mt-4">
          {todos.filter(todo => !todo.completed).length} tasks remaining
        </div>
      </div>
    </div>
  );
}

export default App;