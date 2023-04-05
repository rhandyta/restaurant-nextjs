import React from "react";

const Label = ({ label = "input_text", className = "" }) => {
    return (
        <label className="label">
            <span className={`label-text text-sm ${className}`}>{label}</span>
        </label>
    );
};

export default Label;
