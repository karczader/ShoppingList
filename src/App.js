import React from 'react'
import './App.css';
import ToDoList from './components/ToDoList/ItemList.js'


function App() {
  return (
    <div className="App">
      <h1>Shopping list</h1>
      <ToDoList/>
    </div>
  );
}

export default App;