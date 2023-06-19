import React from "react";

function Button({ text = "", type = "button", className, children, ...props }) {
    return (
        <button type={type} className={`btn ${className}`} {...props}>
            {text.length === 0 ? children : text}
        </button>
    );
}

export default Button;
