import React from 'react';
import { connect } from 'react-redux'
 import { Formik, Form } from 'formik';
 import * as Yup from 'yup';
import { addTodos, updateTodos } from '../../../redux/actions/todosActions';
import { todoStatus } from '../../../utils/constants';
import './TodoForm.css';
import TextField from '../../../components/TextField/TextField';
import SelectField from '../../../components/SelectField/SelectField';

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
        updateTodos(updatedValues);
    };

    const prepareTodoToCreate = (values, action) => {
        createNewTodo(values);
        action.resetForm();
    };
    
    const onSubmit = updateTodoForm ? prepareTodoToUpdate : prepareTodoToCreate;

    const drawDetailsFields = () => {
        return (
            <>
                <SelectField name='sortBy' className='form-input' label='Status'>
                    {renderStatusOptions()}
                </SelectField>
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
                <button type='submit'>{textValue}</button>
            );
        };

        if (updateTodoForm && Object.keys(touched).length) {
            return (
                <>
                    <button type='submit'>{textValue}</button>
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
                    <TextField name='title' className='form-input' label='TODO title' />
                    <TextField isTextArea={true} name='description' className='form-input' label='Description' />

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