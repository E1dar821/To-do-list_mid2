import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/slices/todoSlice';
import { Trash2 } from 'lucide-react';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TodoItem;