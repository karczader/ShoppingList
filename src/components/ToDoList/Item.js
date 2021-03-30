import React from 'react'


function Todo({todo, onCloseClick, counter, addClick, substractClick}){
    return(
        <div className="oneItem">
            <button className="removeItem" onClick={()=>onCloseClick(todo)}>X</button>
            <div className="nameItem"> {todo}</div>          
        </div>
    )
}

export default Todo