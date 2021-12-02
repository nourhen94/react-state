import React from 'react'

const TodoCard = ({task,del,comp}) => {
    console.log('the element is', task)
    return (
        <div>
           <h2 id ={task.isDone?"completed" :" "}> {task.action }</h2> 
           <button onClick={()=>del(task.id)}> delete</button>
           <button onClick={()=>comp(task.id)}>complete</button>
        </div>
    )
}

export default TodoCard
