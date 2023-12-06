import React from 'react'
import Wrapper from './Wrapper'
import '../App.css';
import TodoItem from './TodoItem';
function TodoBody({ todoList, onDelete, onCheck }) {
    return (
        <Wrapper classNAme={'tBody'}>
            {todoList.map((todotext) => {
                return (<TodoItem todo={todotext.text} key={todotext.id} onDelete={() => { onDelete(todotext.id) }} onCheck={() => { onCheck(todotext.id) }} strike={todotext.striked} />)
            })}
        </Wrapper>
    )
}

export default TodoBody              