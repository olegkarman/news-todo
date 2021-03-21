import React from 'react';
import './TodoItem.css';

const TodoItem = ({onDelete, todo}) => {
    return (
        <div className={`todo-item-wrapper status-${todo.status}`}>
            <button onClick={() => onDelete(todo.id)}>X</button>
            <a href={`/todos/${todo.id}`}>
                <h3 className='todo-item-header'>{todo.title}</h3>
                <p>{todo.date}</p>
            </a>
        </div>
    );
};

export default TodoItem;