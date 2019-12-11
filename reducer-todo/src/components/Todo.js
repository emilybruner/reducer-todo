import React, {useReducer, useState} from 'react';
import {reducer, initialState} from '../reducers/todoreducer';
import {ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED} from '../reducers/todoreducer';

const Todo = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)
    const [formValue, setFormValue] = useState('');

    const addTodo = event => {
        event.preventDefault();
        dispatch({
            type: ADD_TODO,
            payload: {item: formValue}
        })
        setFormValue('');
    }

    const onChange = e => {
        setFormValue(e.target.value)
    }

    const markComplete = id => event  {
        event.preventDefault();
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {item_id: id}
        })
    }

    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: CLEAR_COMPLETED
        })
    }

    return (
        <div>
            <form>
                <input value={formValue} onChange={onChange} type='text' />
                <button onClick={addTodo} type='submit'>Enter</button>
            </form>
            <button onClick={clearCompleted}>Clear Completed</button>
            {todos ? todos.map (todo => (
                <p>{todo.item}</p>
            ))
        :null}
        </div>
    )
}

export default Todo;
