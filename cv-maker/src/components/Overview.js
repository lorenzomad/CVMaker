import React from "react";

const Overview = ({todoList}) => {

    const listItems = todoList.map(task => <li id="{task.id}"> {task.name} </li>)

    return ( 
        <div >
            <h1>Task List</h1>
            <ul> {listItems} </ul>
        </div>
    )
}

export default Overview