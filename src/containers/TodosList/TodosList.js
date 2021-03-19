import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';
import { removeTodos } from '../../redux/actions/todosActions';
import TodoForm from '../TodoForm/TodoForm';

const TodosList = ({todosList, removeTodo}) => {
    const [showTodosForm, setTodosFormVisibility] = useState(false);

    const drawTodos = () => {
        return todosList.map(todo => (<TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />));
    };

    const deleteTodo = id => {
        console.log(id);
        removeTodo(id);
    };

    return (
        <div>
            <button onClick={() => setTodosFormVisibility(!showTodosForm)}>{!showTodosForm ? '+' : '-'}</button>
            {showTodosForm ? <TodoForm /> : null}
            
            <br />

            {todosList.length ? drawTodos() : null}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todosList: state.todos.todosList
    }
};

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodos(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);