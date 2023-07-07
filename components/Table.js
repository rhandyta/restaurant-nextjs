"use client";
import { useEffect, useState, useContext } from "react";
import RowTableCart from "./RowTableCart";

import { useGetCart } from "@/app/cart/useGetCart";

import { CartContext } from "@/context/cart-context";
import { UserContext } from "@/context/user-context";

function Table() {
    const { token } = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    const [carts, setCarts] = useState(null);

    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [ppn, setPpn] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const getCart = useGetCart;

    const getCartUser = () => {
        setIsLoading(true);
        if (token) {
            // Tambahkan pengecekan apakah token tersedia
            getCart(token)
                .then((res) => {
                    setCarts(res.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false); // Ubah menjadi false jika terjadi error
                });
        } else {
            setIsLoading(false); // Ubah menjadi false jika token tidak tersedia
        }
    };

    const refreshCart = async () => {
        setTimeout(() => {
            getCart(token)
                .then((res) => {
                    setCarts(res.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(true);
                });
        }, 1000);
    };

    useEffect(() => {
        if (token) {
            getCartUser(token);
        }
    }, [token]);

    useEffect(() => {
        setCart((prev) => {
            return {
                ...prev,
                subTotal,
                discount,
                total: Number(subTotal) - Number(ppn),
                item: JSON.stringify(carts),
            };
        });
    }, [subTotal, carts]);
    console.log(ppn);

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
