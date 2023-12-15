import logo from './logo.svg';
import './App.css';
import TodoBody from './compos/TodoBody';
import DialogueBox from './compos/Dialogue';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [DisplayAddDialogue, setdisplayAddDialogue] = useState(false)
  let initial_todo = JSON.parse(localStorage.getItem('stored_todo'))['todos']
  const [toDoList, settoDoList] = useState(initial_todo)
  const [noEditing, setnoEditing] = useState(true)
  let displayDialogueHandler = () => {
    setdisplayAddDialogue(!false)

  }
  useEffect(() => {
    let storedFullList = localStorage.setItem('stored_todo', JSON.stringify({ 'todos': [...toDoList] }))
    console.log(storedFullList)
  }, [toDoList])

  const [save, setsave] = useState('Add')

  let HideHandler = () => {
    setsave('Add')
    setdisplayAddDialogue(false)
  }
  const [striked, setstriked] = useState(false)
  let addTodoHandler = (text) => {

    if (text.trim().length > 0) {

      settoDoList((prev) => ([...prev, { text, id: toDoList.length + 1, striked: false }]))


    }
    setdisplayAddDialogue(false)


  };
  let deleteHandler = (id) => {
    let filtered = toDoList.filter((textItem) => { return (textItem.id !== id) })
    // console.log(filtered);

    settoDoList(filtered)

  }
  let checkHandler = (checked) => {
    let filtered = toDoList.filter((textItem) => { return (textItem.id === checked) })


    let checkedList;
    let FullNew = toDoList.map((todo) => {
      if (todo.id === checked) {


        return {
          ...todo,

          striked: !todo.striked
        }

      }
      return todo

    })
    console.log(FullNew);
    settoDoList(FullNew)

  }
  const [category, setcategory] = useState("All")
  let SelecHandler = (e) => {
    if (e.target.value === 'All') {
      setcategory('All')
    } else if (e.target.value === 'completed') {
      setcategory('completed')
    }
    else if (e.target.value === 'Uncompleted') {
      setcategory('Uncompleted')
    }

  }

  return (
    <div className="App">
      <nav className='todo-nav'> <button className='btn add-todo-btn' onClick={displayDialogueHandler}>Add todo</button>

        <select onClick={SelecHandler}>
          <option>All</option>
          <option>completed</option>
          <option>Uncompleted</option>
        </select>
      </nav>
      {DisplayAddDialogue ? <DialogueBox Hide={HideHandler} onAddToDo={addTodoHandler} dialogueStatus={save} /> : null}
      <TodoBody todoList={category === 'All' ? toDoList : category === "completed" ? toDoList.filter((todo) => (todo.striked === true)) : category === "Uncompleted" ? toDoList.filter((todo) => (todo.striked === false)) : toDoList

      } onDelete={deleteHandler} onCheck={checkHandler} />
    </div>
  );
}

export default App;
