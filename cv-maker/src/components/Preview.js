import React from "react";

const Preview = ({data}) => {

    let listItems = []

    Object.keys(data).forEach((key, index)  => {
        listItems.push({
            id: index,
            section: key,
            entry: data[key]
         });
      });

    //this doesn't work for an object so I had to convert to array first
    const list = listItems.map(element => {
        
        return (
            <li id={element.id}> 
                <div>
                    <h4>{element.section}</h4>
                    <p>{element.entry}</p> 
                </div>
            </li>)
        })

    return ( 
        <div className="preview" >
            <ul> {list} </ul>
        </div>
    )
}

export default Preview