import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../../components/TodoItem/TodoItem';
import { completeTodos, removeTodos } from '../../../redux/actions/todosActions';
import TodoForm from '../TodoForm/TodoForm';
import moment from 'moment';
import './TodosList.css';

const TodosList = ({todosList, removeTodo, completeTodo}) => {
    const [showTodosForm, setTodosFormVisibility] = useState(false);

    const drawTodos = () => {
        return todosList.map(todo => (<TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onComplete={completeTodo} />));
    };

    const deleteTodo = id => {
        removeTodo(id);
    };

    const tasksCount = todosList.filter(todo => todo.status !== 'deleted').length;

    return (
        <div>
            <div className='top-todo-list-part'>
                <div className='todos-status'>
                    <h1 className='todos-current-time'>{moment(new Date()).format('LL')}</h1>
                    <p className='todos-tasks-number'>{`${tasksCount} ${tasksCount === 1 ? 'task' : 'tasks'}`}</p>
                </div>

                <button className='show-hide-create-todo' onClick={() => setTodosFormVisibility(!showTodosForm)}>{!showTodosForm ? '+' : '-'}</button>
            </div>
            {showTodosForm ? <TodoForm /> : null}
            
            <div className='todo-list-wrapper'>
                {todosList.length ? drawTodos() : null}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todosList: state.todos.todosList
    }
};

const mapDispatchToProps = (dispatch) => ({
    removeTodo: id => dispatch(removeTodos(id)),
    completeTodo: id => dispatch(completeTodos(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);