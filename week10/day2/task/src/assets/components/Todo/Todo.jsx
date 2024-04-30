import React from 'react'
import { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todo, setTodo] = useLocalStorage("inputValue",[])

    function formSubmit(e) {
        e.preventDefault()
        setTodo([...todo,inputValue])
        setInputValue("")
    }

  return (
   <>
    <form action="" onSubmit={formSubmit}>
        <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} name="" id="" />
        <button>add</button>
    </form>
    <div>
       {todo.map((x,i)=>(
        <h2 key={i}>{x}</h2>
       ))}
    </div>
   </>
  )
}

export default Todo