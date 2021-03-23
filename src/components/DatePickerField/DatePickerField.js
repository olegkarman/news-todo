import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerField.css';

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
                dateFormat="MM-dd-yyyy"
            />
        </>
    );
};

export default DatePickerField;