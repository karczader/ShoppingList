import React from 'react'


function Todo({todo, onCloseClick, counter, addClick, substractClick}){
    return(
        <div className="oneItem">
            <button className="removeItem" onClick={()=>onCloseClick(todo)}>X</button>
            <div className="nameItem"> {todo}</div>
            <div>
                <div className="itemNumber">, ilość: {counter}</div>
                <button className="counter" onClick={()=>addClick()}> +</button>
                <button className="counter" onClick={()=>substractClick()}> -</button>
            </div>            
        </div>
    )
}

export default Todo