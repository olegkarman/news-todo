import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { getTodosById } from '../../../redux/selectors/todosSelectors';
import { todoStatus } from '../../../utils/constants';
import { updateTodos } from '../../../redux/actions/todosActions';

const TodoDetailsSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(250, 'Too Long!')
        .required('Required'),
    status: Yup.string()
});

const TodoDetailPage = ({todoDetails, updateTodo}) => {
    const renderStatusOptions = () => {
        return Object.values(todoStatus).map((status, i) => {
            return <option key={i} value={status}>{status}</option>
        });
    };

    const drawUpdateButtons = () => (
        <>
            <button type="submit">Update</button>
            <a href={'/todos'}>Cancel</a>
        </>
    );

    const prepareTodoToUpdate = values => {
        const updatedValues = {...values, id: todoDetails.id};
        updateTodo(updatedValues);
    };

    return (
        <div>
            {/* {JSON.stringify(todoDetails)} */}

            <Formik
                initialValues={{
                    title: todoDetails.title,
                    description: todoDetails.description,
                    status: todoDetails.status,
                    date: todoDetails.date
                }}
                validationSchema={TodoDetailsSchema}
                onSubmit={prepareTodoToUpdate}
            >
            {({ errors, touched }) => (
                <Form>
                    <Field name='title' />
                    {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                    ) : null}
                    <Field name='description' />
                    {errors.description && touched.description ? (
                        <div>{errors.description}</div>
                    ) : null}
                    <Field as='select' name='status'>
                        {renderStatusOptions()}
                    </Field>
                    <p>{todoDetails.date}</p>
                    {Object.keys(touched).length ? drawUpdateButtons() : null}
                </Form>
            )}
            </Formik>
        </div>
    );
};

const mapStateToProps = (state, dispatchProps) => {
    const todoDetails = getTodosById(state, dispatchProps.match.params.id)
    return { todoDetails }
}

const mapDispatchToProps = (dispatch) => ({
    updateTodo: (todo) => dispatch(updateTodos(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);