import React from 'react';
import { useField } from 'formik';

const TextField = ({ isTextArea = false, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <span className='field-wrapper'>
        <label className='form-field-label'>
            {label}
            {isTextArea ? <textarea {...field} {...props} /> : <input {...field} {...props} />}
        </label>
        {meta.touched && meta.error ? (
          <div className="form-error">{meta.error}</div>
        ) : null}
      </span>
    );
};

export default TextField;