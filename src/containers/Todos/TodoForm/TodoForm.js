import React from 'react';
import { connect } from 'react-redux'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { addTodos, updateTodos } from '../../../redux/actions/todosActions';
import { todoStatus } from '../../../utils/constants';
import './TodoForm.css';

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
                <Field as='select' name='status' className="form-input status-input">
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

    const drawSubmitButtons = touched => {
        if (!updateTodoForm) {
            return (
                <button type="submit">{textValue}</button>
            );
        };

        if (updateTodoForm && Object.keys(touched).length) {
            return (
                <>
                    <button type="submit">{textValue}</button>
                    <a href={'/todos'}>Cancel</a>
                </>
            );
        };
    };

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
                    <Field name='title' className="form-input title-input" />
                    {errors.title && touched.title ? (
                        <div className='form-error'>{errors.title}</div>
                    ) : null}
                    <Field as='textarea' name='description' className='form-input description-input' />
                    {errors.description && touched.description ? (
                        <div className='form-error'>{errors.description}</div>
                    ) : null}
                    {updateTodoForm ? drawDetailsFields() : null}
                    <div className='form-contols'>
                        {drawSubmitButtons(touched)}
                    </div>
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