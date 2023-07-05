import React from "react";
import ButtonLoading from "./ButtonLoading";
import Button from "./Button";

function QuantityCart({
    product,
    incrementCartItem,
    decrementCartItem,
    isLoadingQuantity,
}) {
    return (
        <>
            {isLoadingQuantity ? (
                <ButtonLoading className="btn-sm" />
            ) : (
                <Button
                    text="Minus"
                    className="btn-sm"
                    onClick={() => decrementCartItem(product.id)}
                />
            )}
            <span>{product.quantity}</span>
            {isLoadingQuantity ? (
                <ButtonLoading className="btn-sm" />
            ) : (
                <Button
                    text="Plus"
                    className="btn-sm"
                    onClick={() => incrementCartItem(product.id)}
                />
            )}
        </>
    );
}

export default QuantityCart;
