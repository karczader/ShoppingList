import React from 'react'


const changeCounter=(number)=>{
    setNumber(number+1)
    //setNumber(number-1)
}

function Number({counter}){
    return(
        <div>
            <div className="itemNumber">, ilość: {counter}</div>
            <button className="counter" onClick={changeCounter(counter)}> +</button>
            <button className="counter" onClick={changeCounter(counter)}> -</button>
        </div>
    )
}


export default Number