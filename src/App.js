import React, { useState } from 'react';
import './App.css';
import { Searcher } from './components/searcher/Searcher';
import { Todolist } from './components/todolist/Todolist';
import { AppHeader } from './components/app-header/App-header';
import { ItemStatusFilter } from './components/item-status-filter/Item-status-filter';
import { AddItem } from './components/add-item/AddItem';

const App = () => {

  // state
  const [todos, setTodos] = useState([
    { label: 'Welcome in Todo app', important: false, done: false, id: 1 },
    { label: 'Enjoy creating your first todo', important: false, done: false, id: 2 },
  ])
  const [searchValue, setSearchValue] = useState("")
  const [filterOption, setFilterOption] = useState("all")

  // functions
  let minId = todos.length + 1
  const todosCount = todos.filter((todo) => !todo.done).length
  const doneCount = todos.filter((todo) => todo.done).length
  const deleteItem = (id) => {
    const idx = todos.findIndex((el) => el.id === id)
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  }
  const addTodo = (label) => {
    const newTask = [...todos,
    { label: label, important: false, done: false, id: minId++ }]
    setTodos(newTask)
  }
  const onToggleImportant = (id) => {
    const idx = todos.findIndex((el) => el.id === id)
    const newImportantState = [...todos];
    newImportantState[idx].important = !newImportantState[idx].important;
    setTodos(newImportantState);
  }

  const onToggleDone = (id) => {
    const idx = todos.findIndex((el) => el.id === id)
    const newDoneState = [...todos];
    newDoneState[idx].done = !newDoneState[idx].done;
    setTodos(newDoneState);
  }
  const searchFunc = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
  }

  const filter = (items, filterOption) => {
    switch (filterOption) {
      case "all":
        return items
      case "done":
        return items.filter((item) => item.done)
      case "active":
        return items.filter((item) => !item.done)
      default:
        return items
    }
  }
  const visibleItems = filter(searchFunc(todos, searchValue), filterOption)
  return (
    <div className=" container main-container">
      <AppHeader todo={todosCount} done={doneCount} />
      <AddItem addTodo={addTodo} />
      {todos.length === 0
        ? null
        : <div className="app-header d-flex">
          <Searcher setSearchValue={setSearchValue} />
          <ItemStatusFilter setFilterOption={setFilterOption} filterOption = {filterOption}/>
        </div>
      }
      <Todolist todos={visibleItems} onDelete={deleteItem}
        onToggleImportant={onToggleImportant} onToggleDone={onToggleDone} />
    </div>
  );
}

export default App;
