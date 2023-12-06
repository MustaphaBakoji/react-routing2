import React from 'react'
import '../App.css';
function Wrapper({ children, classNAme }) {
    return (
        <div className={`wrapper ${classNAme}`}>{children}</div>
    )
}

export default Wrapper