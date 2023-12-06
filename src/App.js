import logo from './logo.svg';
import './App.css';
import TodoBody from './compos/TodoBody';
import DialogueBox from './compos/Dialogue';
import { useState } from 'react';


function App() {
  const [DisplayAddDialogue, setdisplayAddDialogue] = useState(false)
  let initial_todo = []
  const [toDoList, settoDoList] = useState(initial_todo)
  const [noEditing, setnoEditing] = useState(true)
  let displayDialogueHandler = () => {
    setdisplayAddDialogue(!false)
  }
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
    filtered[0].striked = !filtered[0].striked

    let checkedList;
    let FullNew = toDoList.map((todo) => {
      if (todo.id === checked) {


        return {
          id: todo.id,
          text: todo.text,
          striked: !todo.striked
        }

      }
      return todo

    })
    console.log(FullNew);
    settoDoList(FullNew)
  }

  return (
    <div className="App">
      <nav className='todo-nav'> <button className='btn add-todo-btn' onClick={displayDialogueHandler}>Add todo</button>

        <select >
          <option>All</option>
          <option>completed</option>
          <option>Uncompleted</option>
        </select>
      </nav>
      {DisplayAddDialogue ? <DialogueBox Hide={HideHandler} onAddToDo={addTodoHandler} dialogueStatus={save} /> : null}
      <TodoBody todoList={toDoList} onDelete={deleteHandler} onCheck={checkHandler} />
    </div>
  );
}

export default App;
