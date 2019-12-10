import React from 'react';

export const Todo = ({todo, dispatch}) => {
    console.log(todo);
    return (
        <div>
        <p>{todo.item}</p>
        
        </div>
    )
}

