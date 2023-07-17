import React from "react";

function StatusTransaction({ status }) {
    return (
        <>
            {status == "settlement" ? (
                <span className="badge badge-success text-lime-100">
                    {status}
                </span>
            ) : status == "pending" ? (
                <span className="badge badge-primary text-lime-100">
                    {status}
                </span>
            ) : status == "cancel" ? (
                <span className="badge badge-error text-lime-100">
                    {status}
                </span>
            ) : status == "expire" ? (
                <span className="badge badge-warning text-lime-100">
                    {status}
                </span>
            ) : status == "deny" ? (
                <span className="badge badge-error text-lime-100">
                    {status}
                </span>
            ) : (
                <span className="badge text-lime-100">{status}</span>
            )}
        </>
    );
}

export default StatusTransaction;
