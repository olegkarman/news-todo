import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePickerField from '../../../components/DatePickerField/DatePickerField';
import { languagesCodes, newsSortingOptions } from '../../../utils/constants';
import { dateFormater } from '../../../utils/dateFormater';
import TextField from '../../../components/TextField/TextField';
import './NewsSearchForm.css';
import SelectField from '../../../components/SelectField/SelectField';

// import axios from '../../../utils/axios';
// import { newsApiKey } from '../../../utils/constants';
// import { extractSearchData } from '../../../utils/extractSearchData';

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

const NewsSearchForm = ({loadNews, searchParams, setSearchUsed}) => {

    const prepareValuesToSubmit = values => {
        const formatedValues = dateFormater(values, ['from', 'to']);
        loadNews(formatedValues);
        setSearchUsed(true);
    };

    const renderLanguagesOptions = () => {
        return Object.entries(languagesCodes).map(([key, value], i) => {
            return <option key={i} value={key}>{value}</option>
        });
    };

    const renderSortByOptions = () => {
        return newsSortingOptions.map((opt, i) => {
            return <option key={i} value={opt}>{opt}</option>
        });
    };

    return (
        <div className='search-form-wrapper'>
            <Formik
                initialValues={searchParams}
                validationSchema={NewsSearchSchema}
                onSubmit={prepareValuesToSubmit}
            >
            {() => (
                <Form>
                    <TextField name='q' className='form-input' label='Search Word' />

                    <div className='news-date-range'>
                        <label className='article-range-label'>Article time range</label>
                        <DatePickerField label='From: ' name="from" />
                        <DatePickerField label='To: ' name="to" />
                    </div>

                    <SelectField name='language' className='form-input' label='Article language'>
                        {renderLanguagesOptions()}
                    </SelectField>

                    <SelectField name='sortBy' className='form-input' label='Sort by'>
                        {renderSortByOptions()}
                    </SelectField>

                    <button type='submit'>Search</button>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default NewsSearchForm;