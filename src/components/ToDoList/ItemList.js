import React, {useState} from 'react'
import Todo from './Item'

function ToDoList(props){
    const [todoListState, setTodoListState] = useState( {todos: ["apple", "banana"], inputValue: "", error: ""})
    const [counterItem, setCounterItem] = useState({item: "", counter: 1})

    const handleInputChange=(event)=>{
        const {value} = event.target
        setTodoListState({
            ...todoListState,
            inputValue: value
        })
    }

    const handleButtonClick=()=>{
        const {todos} = todoListState
        const {counter, item} = counterItem

        //blokada zeby nie wprowadzic pustego zadania
        if (!inputValue) return

        //jesli juz istnieje taki sam element jak teraz dodajemy
        if (todos.some(todo=>todo===inputValue)){
            setTodoListState({
                ...todoListState,
                error: "Ten produkt jest już na liście",
                inputValue: ""
            })

            return;
        }
        setTodoListState({
            todos: [...todos, inputValue],
            inputValue: "",
            error: ""
        })
    }

    const handleToDoRemove=(toDoValue)=>{
       setTodoListState({
           ...todoListState,
           todos: todos.filter(todo => todo!==toDoValue) //funkcja filter zwraca obiekt, ktory jest prawda dla danego warunku
           //czyli my chcemy zeby zwrocila wszystkie obiektry poza tym przeslanym jako argument funkcji

       })
    }

    const addCounter=()=>{
        const {counter, item} = counterItem
        setCounterItem({
            ...counterItem,
            counter: counter+1
        })
    }

    const substractCounter=()=>{
        const {counter, item} = counterItem
        setCounterItem({
            ...counterItem,
            counter: counter-1
        })
    }

    const {todos, inputValue, error} = todoListState;
    return(
        <div>
            <input type="text" name="item" placeholder="add new item" value={inputValue} onChange={handleInputChange}></input>
            <button className="addButton" onClick={handleButtonClick}>Add</button>

            {!!error &&
                    <p className="error">{error}</p>
            }
            <h3>My list:</h3>
            <div className="listItem">
                {todos.map((todo)=>(<Todo key={todo} todo={todo} onCloseClick={handleToDoRemove} counter={counterItem.counter} addClick={addCounter} substractClick={substractCounter}/>))}
            </div>
        </div>
    )
}

export default ToDoList