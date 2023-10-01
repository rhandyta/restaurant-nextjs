"use client";
import Image from "next/image";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { useDestroyItem } from "@/app/cart/useGetCart";
import ButtonLoading from "./ButtonLoading";
import {
    decrementQuantity,
    incrementQuantity,
} from "@/app/cart/useQuantityItem";
import { convertRupiah } from "@/utils/utils";
import { useEffect, useState } from "react";

function RowTableCart({ product, token, refreshCart, setSubTotal }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingQuantity, setIsLoadingQuantity] = useState(false);
    const destroyItem = useDestroyItem;

    const destroyItemCart = async (data) => {
        setIsLoading(true);
        await destroyItem(data, token);
        await refreshCart(token);
        setIsLoading(false);
        setSubTotal(
            (prev) => prev - Number(product.product.price) * product.quantity
        );
        return true;
    };

    const quantityCartItem = async (id, preference) => {
        try {
            if (isLoadingQuantity) return false;

            if (preference === "increment") {
                setIsLoadingQuantity(true);
                await incrementQuantity(id, setIsLoadingQuantity, token);
                refreshCart(token);
                setSubTotal((prev) => prev + Number(product.product.price));
                setIsLoadingQuantity(false);
                return true;
            }

            if (preference === "decrement") {
                setIsLoadingQuantity(true);
                await decrementQuantity(id, setIsLoadingQuantity, token);
                refreshCart(token);
                setSubTotal((prev) => prev - Number(product.product.price));
                setIsLoadingQuantity(false);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setSubTotal(
            (prev) => prev + Number(product.product.price) * Number(quantity)
        );
    }, []);

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Image
                                src={product.product.foodimages[0].image_url}
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
                    {isLoadingQuantity ? (
                        <ButtonLoading className="btn-sm" text="" />
                    ) : (
                        <Button
                            text="Minus"
                            className="btn-sm"
                            onClick={() =>
                                quantityCartItem(product.id, "decrement")
                            }
                        />
                    )}
                    <span>{product.quantity}</span>
                    {isLoadingQuantity ? (
                        <ButtonLoading className="btn-sm" text="" />
                    ) : (
                        <Button
                            text="Plus"
                            className="btn-sm"
                            onClick={() =>
                                quantityCartItem(product.id, "increment")
                            }
                        />
                    )}
                </div>
            </td>
            <td>
                <span className="font-bold">
                    Rp
                    {convertRupiah(Number(product.product.price))}
                </span>
            </td>
            <th>
                <div className="flex flex-wrap">
                    {isLoading ? (
                        <ButtonLoading key={product.id} className="btn-sm" />
                    ) : (
                        <ButtonIcon
                            key={product.id}
                            className="btn-sm bg-rose-600 border-none"
                            onClick={() => destroyItemCart(product.id)}
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
                            {/* <Image
                        src="/images/svg/trash.svg"
                        alt="Wishlist"
                        width={28}
                        height={28}
                    /> */}
                        </ButtonIcon>
                    )}
                </div>
            </th>
        </tr>
    );
}

export default RowTableCart;
