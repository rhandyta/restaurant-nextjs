"use client";
import Button from "@/components/Button";
import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as yup from "yup";
function Cart() {
    const initialValues = {
        coupon: "",
    };

    const validationSchema = yup.object({
        coupon: yup.string().length(6).min(6).max(6),
    });

    const onSubmit = (values, props) => {
        console.log({ values, props });
    };

    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <Header />
            </div>
            <section className="px-20 w-full mt-10">
                <div className="w-full min-h-96 flex justify-between">
                    <div className="w-[75%] min-h-full">
                        <div className="overflow-y-auto h-96 ">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="bg-rose-200 rounded-none">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </label>
                                        </th>
                                        <th className="bg-rose-200">Product</th>
                                        <th className="bg-rose-200">
                                            Quantity
                                        </th>
                                        <th className="bg-rose-200">Price</th>
                                        <th className="bg-rose-200 rounded-none"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Image
                                                            src="/images/img/avatar.jpg"
                                                            alt="product"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Cheese hamburger
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 items-center">
                                                <Button
                                                    text="-"
                                                    className="btn-sm"
                                                />
                                                <span>2</span>
                                                <Button
                                                    text="+"
                                                    className="btn-sm"
                                                />
                                            </div>
                                        </td>
                                        <td>$10.00</td>
                                        <th>
                                            <div className="flex flex-wrap">
                                                <ButtonIcon className="btn-sm bg-rose-600 border-none">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-[20%] min-h-max flex flex-col justify-between">
                        <div className="bg-rose-200 h-[35%] flex flex-col justify-center p-5">
                            <p>Have a coupon?</p>
                            <div className="flex mt-2">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    {(props) => {
                                        return (
                                            <>
                                                <Input
                                                    name="coupon"
                                                    className="border-none rounded-none w-[80%] p-1 focus:outline-none focus:ring-1 focus:ring-rose-400"
                                                    placeholder="Coupon Code"
                                                />
                                                <Button
                                                    text="Apply"
                                                    className="btn-sm rounded-none h-full"
                                                />
                                            </>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                        <div className="bg-rose-200 h-[55%] p-5">
                            <div className="border-b-2 border-rose-400">
                                <p>
                                    Total Price: <span>$69.97</span>
                                </p>
                                <p>
                                    Discount:{" "}
                                    <span className="text-rose-600">
                                        -$10.00
                                    </span>
                                </p>
                                <p className="font-semibold text-slate-800">
                                    Total: $57.97
                                </p>
                            </div>
                            <div className="mt-2 flex flex-col gap-1">
                                <Link href="/checkout">
                                    <Button
                                        text="Make Purchase"
                                        className="w-full h-10"
                                    />
                                </Link>
                                <Button
                                    text="Continue Shopping"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Cart;
