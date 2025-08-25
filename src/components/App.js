
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[todos,setTodos]=useState([]);
  const[inputValue,setInputValue]=useState("");

  const addTodo=()=>{
    if(inputValue){
   setTodos([...todos,inputValue]);
   setInputValue("");}
  }

  const handleChange=(e)=>{
     setInputValue(e.target.value);
  }

  const removeToDo=(index)=>{
    const updatedTodo=todos.filter((_,i)=>index!=i)
    setTodos(updatedTodo);
  }
  return (
    <div>
        <h4>To-Do List</h4>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={addTodo}>Add Todo</button>

        <ul style={{listStyleType:"none"}}>
        {todos.map((todo,index)=>(
          <li key={index}>
            
            {todo}
            
            <button onClick={() => removeToDo(index)}>Delete</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default App
