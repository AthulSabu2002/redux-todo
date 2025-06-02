interface FilterButtonsProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButtons = ({ filter, setFilter }: FilterButtonsProps) => {
  return (
    <div className="flex justify-center space-x-3 mb-6">
      <button
        className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors border-2 ${
          filter === 'all' 
            ? 'bg-slate-800 text-white border-slate-800' 
            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
        }`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors border-2 ${
          filter === 'active' 
            ? 'bg-slate-800 text-white border-slate-800' 
            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
        }`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors border-2 ${
          filter === 'completed' 
            ? 'bg-slate-800 text-white border-slate-800' 
            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;