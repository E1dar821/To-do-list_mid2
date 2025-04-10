import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/slices/todoSlice';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value))}
          className={`px-4 py-2 rounded-lg ${
            currentFilter === value
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;