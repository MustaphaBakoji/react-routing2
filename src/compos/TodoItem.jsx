import React from 'react'
import Wrapper from './Wrapper'

function TodoItem({ todo, onEdit, onDelete, onCheck, strike }) {
    return (
        <Wrapper classNAme={'item'}>

            <input type="checkbox" name="" id="radio" onChange={() => { onCheck() }} checked={strike} />
            <p style={{ textDecoration: strike ? 'line-through' : 'none' }}>{todo}</p>
            <div className="change"> <div className='del' onClick={() => { onDelete() }}>delete</div>

            </div>
        </Wrapper>
    )
}

export default TodoItem
