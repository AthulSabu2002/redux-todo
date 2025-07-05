import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/todosSlice';
import type { RootState } from '../store';

export default function FilterButtons() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="flex gap-2 bg-white rounded-lg shadow-sm p-1">
      {['all', 'active', 'completed'].map(filterType => (
        <button
          key={filterType}
          onClick={() => dispatch(setFilter(filterType as 'all' | 'active' | 'completed'))}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            currentFilter === filterType 
              ? 'bg-slate-800 text-white' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
        </button>
      ))}
    </div>
  );
}