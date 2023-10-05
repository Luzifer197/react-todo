import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import ViewTodoList from './ViewTodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const onDelete = (indexToDelete: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToDelete, 1);
    setTodos(updatedTodos);
  };

  const onEdit = (editedTodo: string) => {
    if (editIndex !== null) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos[editIndex] = editedTodo;
        return updatedTodos;
      });
      setEditIndex(null);
    } else {
      console.error("Es wurde kein Element zum Bearbeiten ausgewählt.");
    }
  };

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        onEdit(newTodo);
      } else {
        setTodos([...todos, newTodo]);
      }
    }
  };

  return (
    <div className="App">
      <div className='TodoList'>
        <h1>ToDo-Liste</h1>
        <InputField
          type="text"
          placeholder="Neues ToDo hinzufügen"
          onAdd={addTodo}
        />
        <ViewTodoList
          setEditIndex={setEditIndex}
          todos={todos}
          onDelete={onDelete}
          onEdit={onEdit}
          editIndex={editIndex}
        />
      </div>
    </div>
  );
}

export default App;
