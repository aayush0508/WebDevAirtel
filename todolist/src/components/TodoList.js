import React from 'react'

const TodoList = ({ Todo, setTodo, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodo(Todo.filter((todo) => todo.id !== id));
    };

    const handleComplete = (todo) => {
        setTodo(
            Todo.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )

    };

    const handleEdit = ({ id }) => {
        const findTodo = Todo.find((Todo) => Todo.id === id);
        setEditTodo(findTodo);

    };

    return (
        <div>
            {
                Todo.map((Todo) => (
                    <li className='todo-list' key={Todo.id}>
                        <input
                            type="text"
                            value={Todo.title}
                            className={`list ${Todo.completed ? "complete" : ""}  `}
                            onChange={(event) => event.preventDefault()}
                        />

                        <div>

                            <button className='button-complete task-button' onClick={() => handleComplete(Todo)}>
                                <i className='fa fa-check-circle'></i>
                            </button>

                            <button className='button-edit task-button' onClick={() => handleEdit(Todo)}>
                                <i className='fa fa-edit'></i>
                            </button>

                            <button className='button-delete task-button' onClick={() => handleDelete(Todo)}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </div>



                    </li>))

            }
        </div>


    );
};

export default TodoList
