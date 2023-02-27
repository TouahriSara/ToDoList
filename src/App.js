
import './App.css';
import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}



/*import {useState} from "react";
function App() { 
  const [todoList,setToDolist]= useState([]);
  const [newTask, setNewTask] = useState("");
  

  const  handleChange =(event)=>{
    setNewTask(event.target.value);
  };
  const addTask =()=>{
    const task={
      id:todoList.length===0 ? 1: todoList[todoList.length -1].id+1,
      taskname:newTask,
    }
   setToDolist([...todoList,task])
  }
  const deleteTask =(id)=>{
   
    setToDolist( todoList.filter(task=> task.id!== id ));
  };
  return (<div className='App'>
   
   <div className="addTask">
    <input className='inp' onChange={handleChange}/>
    <button  onClick={addTask}>ADD TASK</button>
   </div>
   <div className="list">{todoList.map((task)=>{return( 
   <div>
    <p>{task.taskname}</p>
    <button onClick={()=>deleteTask(task.id)} >delete</button>
   </div>)
    })} </div>
     
 </div> 
)}

*/
export default App;
