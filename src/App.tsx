import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, ListTodo } from 'lucide-react';
import { TodoItem } from './components/TodoItem';
import { useTodos } from './hooks/useTodos';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListTodo className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-semibold text-gray-800">My Tasks</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span>{completedCount} of {todos.length} completed</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <PlusCircle className="h-6 w-6" />
            </button>
          </form>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-6 text-gray-500">
                No tasks yet. Add one above!
              </div>
            ) : (
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;