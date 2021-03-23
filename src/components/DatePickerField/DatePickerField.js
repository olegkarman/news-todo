import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerField.css';
import { getMinDate } from '../../utils/dateFormater';

export const DatePickerField = ({label, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
            <label>
                {label}
            </label>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                setFieldValue(field.name, val);
                }}
                maxDate={new Date()}
                minDate={getMinDate()} // with free version of API it is not possible to get all data
                dateFormat="MM-dd-yyyy"
            />
        </>
    );
};

export default DatePickerField;