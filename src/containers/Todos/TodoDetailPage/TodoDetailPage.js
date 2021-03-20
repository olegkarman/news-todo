import React from 'react';
import { connect } from 'react-redux';
import { getTodosById } from '../../../redux/selectors/todosSelectors';
import TodoForm from '../TodoForm/TodoForm';

const TodoDetailPage = ({todoDetails}) => {
    return (
        <TodoForm updateTodoForm={true} todoDetails={todoDetails} />
    );
};

const mapStateToProps = (state, dispatchProps) => {
    const todoDetails = getTodosById(state, dispatchProps.match.params.id)
    return { todoDetails }
}

export default connect(mapStateToProps)(TodoDetailPage);