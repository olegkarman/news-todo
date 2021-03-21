import React from 'react';
import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label>
            {label}
            <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="form-error">{meta.error}</div>
        ) : null}
      </>
    );
};

export default TextField;