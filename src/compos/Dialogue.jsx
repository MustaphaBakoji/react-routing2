import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { useRef } from 'react'

function DialogueBox({ dialogueStatus, onAddToDo, Hide, }) {

    let text_ref = useRef()
    // const [InputEdit, setInputEdit] = useState(text_ref.current.value)

    return (
        <div>
            <div className="backdrop" onClick={() => { Hide() }} />
            <Wrapper classNAme={'dialogue'}>
                <Wrapper classNAme={'input-wrapper'}><input type='text' placeholder='Enter activity...' ref={text_ref}

                /> </Wrapper>

                <Wrapper><button className='input-btn' onClick={() => { onAddToDo(text_ref.current.value) }}>{dialogueStatus}</button></Wrapper>
            </Wrapper>
        </div>

    )
}

export default DialogueBox