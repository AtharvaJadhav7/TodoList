import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if(!task || !desc){
            alert("Task or Description missing!")
        }
        else{
            addTodo(task,desc);
            setTask("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">Task</label>
                    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="form-control" id="taskName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDesc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="taskDesc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
                <hr />
            </form>
        </div>
    )
}
