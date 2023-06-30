"use client";
import { useGetCookieUser } from "@/hooks/useCookieUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { useGetCart } from "@/app/cart/useGetCart";
import { toastError, toastSuccess } from "./ToastComponent";

function RowTableCart() {
    const [carts, setCarts] = useState(null);
    const [token, setToken] = useState(null);
    const useGetCartUser = (token) =>
        useGetCart(token)
            .then((res) => {
                setCarts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

    useEffect(() => {
        const { decryptedTokenJsonString } = useGetCookieUser();
        setToken(decryptedTokenJsonString);
        useGetCartUser(decryptedTokenJsonString);
    }, []);

    const destroyItemCart = async (data) => {
        try {
            const id = {
                id: [data],
            };

            const request = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}cart/destroy`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(id),
                }
            );
            const response = await request.json();
            if (response.status_code !== 200) {
                throw Error(response.messages);
            }
            const tmpData = carts.filter((cart) => cart.id !== data);
            setCarts([...tmpData]);
            toastSuccess(response.messages);
        } catch (error) {
            toastError(error);
        }
    };

    return (
        <>
            {carts == null ? (
                <tr>
                    <td colSpan={4} style={{ textAlign: "center" }}>
                        <p>Loading...</p>
                    </td>
                </tr>
            ) : (
                carts.map((product) => (
                    <tr key={product.id}>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src={
                                                product.product.foodimages[0]
                                                    .image_url
                                            }
                                            alt="product"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">
                                        {product.product.food_name}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex gap-1 items-center">
                                <Button text="-" className="btn-sm" />
                                <span>{product.quantity}</span>
                                <Button text="+" className="btn-sm" />
                            </div>
                        </td>
                        <td>{product.quantity * product.product.price}</td>
                        <th>
                            <div className="flex flex-wrap">
                                <ButtonIcon
                                    className="btn-sm bg-rose-600 border-none"
                                    onClick={(event) =>
                                        destroyItemCart(product.id)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                    Remove
                                    {/* <Image
                            src="/images/svg/trash.svg"
                            alt="Wishlist"
                            width={28}
                            height={28}
                        /> */}
                                </ButtonIcon>
                            </div>
                        </th>
                    </tr>
                ))
            )}
        </>
    );
}

export default RowTableCart;