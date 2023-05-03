import { ErrorMessage } from "formik";
import React from "react";

function ErrorMessageField({ name }) {
    return (
        <ErrorMessage name={name}>
            {(error) => <span className="text-xs text-red-600">{error}</span>}
        </ErrorMessage>
    );
}

export default ErrorMessageField;
