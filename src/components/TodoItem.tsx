import React from 'react';
import { Check, Trash2, Circle } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="group flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 focus:outline-none"
      >
        {todo.completed ? (
          <Check className="h-5 w-5 text-emerald-500" />
        ) : (
          <Circle className="h-5 w-5 text-gray-400" />
        )}
      </button>
      
      <span className={`flex-grow ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-red-500 focus:outline-none"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}