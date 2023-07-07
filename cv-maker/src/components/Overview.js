import React from "react";

const Overview = ({todoList, click}) => {

    const listItems = todoList.map(task => {
    return <li id={toString(task.id)}> {task.id}. {task.name} <button onClick={() => click(task.id)}>Delete</button></li>
    })

    return ( 
        <div >
            <h1>Task List</h1>
            <ul> {listItems} </ul>
        </div>
    )
}

export default Overview