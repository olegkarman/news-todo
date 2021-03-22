import React from 'react';
import { useField } from 'formik';

const SelectField = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <span>
        <label>
            {label}
            <select {...field} {...props}>
                {children}
            </select>
        </label>
        {meta.touched && meta.error ? (
          <div className="form-error">{meta.error}</div>
        ) : null}
      </span>
    );
};

export default SelectField;