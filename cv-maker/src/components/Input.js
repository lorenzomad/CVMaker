import React, { useState } from "react";

const Input = ({submitTask}) => {

    const [task, setTask]  = useState('')
    return (
        <form className="form" onSubmit={e => {
                e.preventDefault()
                submitTask(task)
                }
            }>
            <label >Task title: </label>
            <input type="text" placeholder="Enter your task name here!" onChange={e => {
                setTask(e.target.value)
                e.target.defaultValue = ''
                }} />
            <input type="submit"/>
        </form>
    );
}

export default Input