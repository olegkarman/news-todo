import React from 'react';
import { connect } from 'react-redux'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { addTodos } from '../../redux/actions/todosActions';
 
const TodoSchema = Yup.object().shape({
    title: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    description: Yup.string()
     .min(2, 'Too Short!')
     .max(250, 'Too Long!')
     .required('Required')
});
 
const TodoForm = ({ createNewTodo }) => {
    const submitValues = values => {
        console.log(values)
        createNewTodo(values);
    };

    return (
        <div>
            <h1>Todo</h1>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                validationSchema={TodoSchema}
                onSubmit={submitValues}
            >
            {({ errors, touched }) => (
                <Form>
                    <Field name="title" />
                    {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                    ) : null}
                    <Field name="description" />
                    {errors.description && touched.description ? (
                        <div>{errors.description}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    createNewTodo: (todo) => dispatch(addTodos(todo))
});
  
export default connect(null, mapDispatchToProps)(TodoForm);