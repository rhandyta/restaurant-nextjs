import { Field } from "formik";
import React from "react";

const TextArea = ({
    as = "",
    name = "",
    className = "",
    label = "",
    ...props
}) => {
    return (
        <Field
            as={as}
            name={name}
            className={`textarea textarea-bordered ${className}`}
            {...props}
        />
    );
};

export default TextArea;
