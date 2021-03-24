import React from 'react';
import './TodoItem.css';

const TodoItem = ({onComplete, onDelete, todo}) => {
    return (
        <div className={`todo-item-wrapper status-${todo.status}`}>
            <button className={`complete-button status-${todo.status}`} onClick={() => onComplete(todo.id)} />
            <a href={`/todos/${todo.id}`} className={`todo-item-info status-${todo.status}`}>
                <h3 className='todo-item-header'>{todo.title}</h3>
                <p className='todo-date-creation'>{todo.date}</p>
            </a>
            <button className='delete-button' onClick={() => onDelete(todo.id)}>X</button>
        </div>
    );
};

export default TodoItem;