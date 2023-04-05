import React from "react";
import { Field } from "formik";

const Input = ({ type = "text", className = "", ...props }) => {
    return (
        <Field
            className={`input input-bordered input-sm w-full ${className}`}
            type={type}
            {...props}
        />
    );
};

export default Input;
