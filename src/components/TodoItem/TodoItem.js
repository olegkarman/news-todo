import React from 'react';

const TodoItem = ({onDelete, todo}) => {
    return (
        <div>
            <button onClick={() => onDelete(todo.id)}>X</button>
            <a href={`/todos/${todo.id}`}>
                <h3>{todo.title}</h3>
                <p>{todo.date}</p>
            </a>
        </div>
    );
};

export default TodoItem;