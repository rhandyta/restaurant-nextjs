import React from "react";

function Button({ text = "", className, children, ...props }) {
    return (
        <button className={`btn ${className}`} {...props}>
            {text.length === 0 ? children : text}
        </button>
    );
}

export default Button;
