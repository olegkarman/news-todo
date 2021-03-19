import React from 'react';

const TodoItem = ({onDelete, todo}) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <button onClick={() => onDelete(todo.id)}>X</button>
            <p>{todo.description}</p>
            <p>{todo.status}</p>
        </div>
    );
};

export default TodoItem;