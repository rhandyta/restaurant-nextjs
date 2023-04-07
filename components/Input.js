import React from "react";
import { Field } from "formik";

const Input = ({ type = "text", name = "", className = "", ...props }) => {
    return (
        <Field
            className={`input input-bordered input-sm w-full ${className}`}
            name={name}
            type={type}
            {...props}
        />
    );
};

export default Input;
