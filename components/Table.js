"use client";
import { useEffect, useState, useContext } from "react";
import RowTableCart from "./RowTableCart";

import { useGetCart } from "@/app/cart/useGetCart";

import { CartContext } from "@/context/cart-context";
import { UserContext } from "@/context/user-context";

function Table() {
    const { cart, setCart } = useContext(CartContext);
    const [carts, setCarts] = useState(null);

    const { token } = useContext(UserContext);

    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const getCart = useGetCart;

    const getCartUser = () => {
        setIsLoading(true);
        getCart(token)
            .then((res) => {
                setCarts(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(true);
            });
    };

    const refreshCart = async () => {
        getCart(token)
            .then((res) => {
                setCarts(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(true);
            });
    };

    useEffect(() => {
        getCartUser(token);
    }, [token]);

    useEffect(() => {
        setCart((prev) => {
            return {
                ...prev,
                subTotal,
                discount,
                total: subTotal - discount,
            };
        });
    }, [subTotal]);
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th className="bg-rose-200 rounded-none">Product</th>
                    <th className="bg-rose-200">Quantity</th>
                    <th className="bg-rose-200">Price</th>
                    <th className="bg-rose-200 rounded-none"></th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr>
                        <td colSpan={5}>
                            <p>Loading...</p>
                        </td>
                    </tr>
                ) : (
                    carts?.map((product) => (
                        <RowTableCart
                            key={product.id}
                            product={product}
                            token={token}
                            refreshCart={refreshCart}
                            setSubTotal={setSubTotal}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
}

export default Table;
