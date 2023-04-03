import React from "react";
import { Field } from "formik";

function Input({ type = "text", ...props }) {
    return (
        <Field type={type} className="input input-bordered w-full" {...props} />
    );
}

export default Input;
