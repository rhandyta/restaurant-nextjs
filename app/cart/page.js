"use client";
import Button from "@/components/Button";
import HeaderRes from "@/components/HeaderRes";
import Input from "@/components/Input";
import Table from "@/components/Table";
import { CartContext } from "@/context/cart-context";
import { convertRupiah } from "@/utils/utils";
import { Formik } from "formik";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const [prices, setPrices] = useState({});

    const initialValues = {
        coupon: "",
    };

    const validationSchema = yup.object({
        coupon: yup.string().length(6).min(6).max(6),
    });

    const onSubmit = (values, props) => {
        console.log({ values, props });
    };

    useEffect(() => {
        let jumlahDiscount = (Number(cart.subTotal) * 0) / 100;
        let subTotalDiscount = Number(cart.subTotal) - jumlahDiscount;
        let ppn = (subTotalDiscount * 11) / 100;
        setPrices({
            subTotal: Number(cart.subTotal),
            discount: cart.discount,
            total: Math.floor(subTotalDiscount + ppn),
        });
    }, [cart]);
    return (
        <main>
            <div className="bg-rose-100 px-0 md:px-20 w-full m-0">
                <HeaderRes />
            </div>
            <section className="px-0 md:px-20 w-full mt-10">
                <div className="w-full min-h-96 flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-[75%] min-h-full">
                        <div className="overflow-y-auto h-96 ">
                            <Table />
                        </div>
                    </div>
                    <div className="w-full md:w-[20%] min-h-max h-fit flex flex-col justify-between">
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
                                    Sub Total:{" "}
                                    <span className="font-medium">
                                        Rp{convertRupiah(prices.subTotal)}
                                    </span>
                                </p>
                                <p>
                                    Discount:{" "}
                                    <span className="text-rose-600">0%</span>
                                </p>
                                <p>
                                    PPN: <span>11%</span>
                                </p>
                                <p className="font-semibold text-slate-800">
                                    Total: Rp{convertRupiah(prices.total)}
                                </p>
                            </div>
                            <div className="mt-2 flex flex-col gap-1">
                                <Link
                                    href={{
                                        pathname: "/checkout",
                                        query: prices,
                                    }}
                                >
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
