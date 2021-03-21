import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DatePickerField from '../../../components/DatePickerField/DatePickerField';
import 'react-datepicker/dist/react-datepicker.css';

const NewsSearchSchema = Yup.object().shape({
    q: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    from: Yup.string(),
    to: Yup.string(),
    language: Yup.string(),
    sortBy: Yup.string()
});

const newsSearchInitialValues = {
    q: '',
    from: '',
    to: '',
    language: '',
    sortBy: ''
};

const NewsSearchForm = () => {
    const handleSubmit = values => {
        console.log(values)
    }

    const renderLanguagesOptions = () => {

    }

    const renderSortByOptions = () => {

    }

    return (
        <div className='search-form-wrapper'>
            <Formik
                initialValues={newsSearchInitialValues}
                validationSchema={NewsSearchSchema}
                onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
                <Form>
                    <Field name='q' className="form-input q-input" />
                    {errors.q && touched.q ? (
                        <div className='form-error'>{errors.q}</div>
                    ) : null}

                    <DatePickerField name="from" />
                    <DatePickerField name="to" />

                    <Field as='select' name='language' className="form-input language-input">
                        {renderLanguagesOptions()}
                    </Field>

                    <Field as='select' name='sortBy' className="form-input language-input">
                        {renderSortByOptions()}
                    </Field>
                    <button type='submit'>Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default NewsSearchForm;