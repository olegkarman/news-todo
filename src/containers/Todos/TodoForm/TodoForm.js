import React from 'react';
import { connect } from 'react-redux'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { addTodos, updateTodos } from '../../../redux/actions/todosActions';
import { todoStatus } from '../../../utils/constants';

const formBasicInputs = {
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(250, 'Too Long!')
        .required('Required')
};

const formBasicInitialValues = {
    title: '',
    description: ''
};
 
const TodoSchema = Yup.object().shape({
    ...formBasicInputs
});

const TodoDetailsSchema = Yup.object().shape({
    ...formBasicInputs,
    status: Yup.string()
});
 
const TodoForm = ({ updateTodoForm = false, todoDetails = {}, createNewTodo, updateTodos }) => {
    const textValue = updateTodoForm ? 'Update' : 'Create';
    const validationSchema = updateTodoForm ? TodoDetailsSchema : TodoSchema;
    const initialValues = updateTodoForm ? {
        title: todoDetails.title,
        description: todoDetails.description,
        status: todoDetails.status,
        date: todoDetails.date
    } : formBasicInitialValues;

    const prepareTodoToUpdate = values => {
        const updatedValues = {...values, id: todoDetails.id};
        console.log(updatedValues);
        updateTodos(updatedValues);
    };
    
    const onSubmit = updateTodoForm ? prepareTodoToUpdate : createNewTodo;

    const drawDetailsFields = () => {
        return (
            <>
                <Field as='select' name='status' className="status-input" >
                    {renderStatusOptions()}
                </Field>
                <p className='date-text'>{todoDetails.date}</p>
            </>
        );
    };

    const renderStatusOptions = () => {
        return Object.values(todoStatus).map((status, i) => {
            return <option key={i} value={status}>{status}</option>
        });
    };

    const drawUpdateButtons = () => (
        <div className='form-contols'>
            <button type="submit">{textValue}</button>
            {updateTodoForm ? <a href={'/todos'}>Cancel</a> : null}
        </div>
    );

    return (
        <div className='form-wrapper'>
            <h1 className='form-header'>{textValue} TODO</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
                <Form>
                    <Field name='title' className="title-input" />
                    {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                    ) : null}
                    <Field name='description' className='description-input' />
                    {errors.description && touched.description ? (
                        <div>{errors.description}</div>
                    ) : null}
                    {updateTodoForm ? drawDetailsFields() : null}
                    {drawUpdateButtons()}
                </Form>
            )}
            </Formik>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createNewTodo: (todo) => dispatch(addTodos(todo)),
    updateTodos: (todo) => dispatch(updateTodos(todo))
});
  
export default connect(null, mapDispatchToProps)(TodoForm);