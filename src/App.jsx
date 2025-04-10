import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoFilters from './components/TodoFilters';
import { useSelector } from 'react-redux';


const TodoList = () => {
  const { todos, filter } = useSelector((state) => state);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-9 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            
            <h1 className="text-3xl font-bold">Todo List</h1>
          </div>
          <p className="text-bold-600">Midterm2</p>
        </div>
        
        <TodoForm />
        <TodoFilters />
        
        <div className="space-y-3">
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {filteredTodos.length === 0 && (
            <p className="text-center text-gray-500 py-4">Lets start something bro !</p>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
};

export default App;