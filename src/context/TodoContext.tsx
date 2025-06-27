import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Todo } from '../types/ToDo'

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id:string) => void;
  deleteTodo: (id:string) => void;
  clearCompleted: () => void;
};

const TodoContext = createContext<TodoContextType | null>(null);


export const useToDo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used inside TodoProvider');
  return context;
};

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]> (()=>{
    const  stored = localStorage.getItem('todos');
    if(stored) {
      try{
        return JSON.parse(stored);
      }catch (e) {
        console.error('Invalid todos in localStorage');
      }
    }
    return [];
  });

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const addTodo = (text:string) =>{
    setTodos(prev => [...prev, {id: Date.now().toString(), text, completed: false}]);
  };

  const toggleTodo = (id:string) =>{
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const deleteTodo = (id: string ) =>{
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo =>!todo.completed));
  };
  return (
    <TodoContext.Provider value ={{todos,addTodo, toggleTodo, deleteTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  )
}

