import React, { useState } from 'react'
import './todo.css';
const ToDo = () => {

    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const addToDo=()=>{
        setTodoList([...todoList,task]);
        setTask("");
    }

    const removeToDo=(index)=>{
        let temp=todoList;
        temp.splice(index,1);
        setTodoList([...temp]);
    }

    const showToDoList=()=>{
        return todoList.map((task,i)=>(
            <div className='task'>
                <p>{task}</p>
                <button onClick={()=>{removeToDo(i)}}>
                    <i class="fa fa-trash " aria-hidden="true"></i>
                </button>
            </div>
        ))
    }

  return (
    <div className='container'>
        <div className="card">
            <div className="card-header">
                <h4>ToDo List</h4>
                
            </div>
            <div className="card-body">
                <div className="input-group">
                    <input className='form-control' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                    <button onClick={addToDo} >Add New Task</button>
                </div>
                {showToDoList()}

            </div>
            
        </div>
    </div>
  )
}

export default ToDo