import React from 'react'
import TodoCard from './TodoCard'
const TodoList = ({list,del,comp}) => {
    
    return (
        <div>
            {list.map((el,i)=>
                <TodoCard key ={i} comp ={comp} del ={del} task={el} />
                )}
        </div>
    )
}

export default TodoList
