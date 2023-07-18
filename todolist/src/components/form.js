import React from 'react'
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, Todo, setTodo, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = Todo.map((Todo) =>
            Todo.id === id ? { title, id, completed } : Todo
        );

        setTodo(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);

        }
        else {
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodo([...Todo, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    };

    return (
        <form onSubmit={onFormSubmit}>

            <input type='text'
                placeholder='Enter a Todo.....'
                className='task-input'
                value={input}
                required
                onChange={onInputChange}
            />

            <button className='button-add' type='submit'>
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    )
}

export default Form

