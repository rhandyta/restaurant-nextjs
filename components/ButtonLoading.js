import React from "react";

function ButtonLoading({ className, text = "Loading..." }) {
    return <button className={`btn loading ${className}`}>{text}</button>;
}

export default ButtonLoading;
