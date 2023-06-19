"use client";
import Button from "@/components/Button";
import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { Formik } from "formik";
import Image from "next/image";
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
                                                <div className="flex gap-1">
                                                    <ButtonIcon className="btn-sm bg-rose-600 border-none">
                                                        Wishlist
                                                        <Image
                                                            src="/images/svg/love.svg"
                                                            alt="Wishlist"
                                                            width={28}
                                                            height={28}
                                                        />
                                                    </ButtonIcon>
                                                    <ButtonIcon className="btn-sm bg-rose-600 border-none">
                                                        Remove
                                                        <Image
                                                            src="/images/svg/trash.svg"
                                                            alt="Wishlist"
                                                            width={28}
                                                            height={28}
                                                        />
                                                    </ButtonIcon>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                                {/* foot */}
                                <tfoot>
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
                                </tfoot>
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
                                                    className="border border-slate-600 w-[80%] p-1"
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
                                <Button
                                    text="Make Purchase"
                                    className="w-full h-10"
                                />
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
