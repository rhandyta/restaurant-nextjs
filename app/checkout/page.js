"use client";
import ButtonIcon from "@/components/ButtonIcon";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import HeaderRes from "@/components/HeaderRes";
import CreditCard from "@/components/CreditCard";
import BankTransfer from "@/components/BankTransfer";
import { useGetCart } from "../cart/useGetCart";
import { UserContext } from "@/context/user-context";
import { useStoreOrder } from "./useStoreOrder";
import { useRouter } from "next/navigation";
import Cash from "@/components/Cash";

function Page({ searchParams }) {
    const router = useRouter();
    const getCart = useGetCart;
    const storeOrder = useStoreOrder;
    const { token } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);

    const cart = useRef([]);

    const initialValues = {
        payment_type: "bank_transfer",
        bank: "bca",
        notes: "",
        tables: "",
        table: "",
        detail_orders: [],
    };

    const validationSchema = yup.object({
        payment_type: yup.string().required(),
        bank: yup.string().required(),
        tables: yup.string().required(),
        table: yup.string().required(),
        notes: yup.string().nullable(),
    });

    const onSubmit = async (values) => {
        try {
            setIsLoading(true);
            const orders = {
                ...values,
                detail_orders: [...cart.current],
            };
            const response = await storeOrder(orders, token, setIsLoading);
            router.push(`/transaction/${response.data.order.transaction_id}`);
            setIsLoading(false);
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {
        if (token) {
            getCart(token)
                .then((res) => {
                    cart.current = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            cart.current = [];
        }
    }, [token]);

    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <HeaderRes />
            </div>
            <section className="w-full mt-10 flex justify-center items-center">
                <div className="card w-4/6 h-fit bg-rose-100 shadow-xl">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(props) => {
                            return (
                                <Form>
                                    <div className="card-body">
                                        <h2 className="card-title border-b border-b-rose-400 uppercase text-slate-400">
                                            Payment method
                                        </h2>
                                        <div className="uppercase text-sm text-slate-400 py-0">
                                            Choose a payment method
                                        </div>
                                        <div className="flex justify-center items-center gap-10">
                                            {/* <ButtonIcon
                                className={`w-32 h-28 rounded-md shadow-md p-2 ${
                                    method == "credit_card" && "bg-neutral"
                                }`}
                                onClick={() =>
                                    handleChangeMethod("credit_card")
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-16 h-16"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                    />
                                </svg>
                                <span className="text-xs">Credit Cart</span>
                            </ButtonIcon> */}
                                            {/* <ButtonIcon
                                className={`w-32 h-28 rounded-md shadow-md p-2 ${
                                    method == "ewallet" && "bg-neutral"
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-16 h-16"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                    />
                                </svg>
                                <span className="text-xs">E-Wallet</span>
                            </ButtonIcon> */}
                                            <ButtonIcon
                                                className={`w-32 h-28 rounded-md shadow-md p-2 ${
                                                    props.values.payment_type ==
                                                        "bank_transfer" &&
                                                    "bg-slate-800"
                                                }`}
                                                onClick={() =>
                                                    props.setFieldValue(
                                                        "payment_type",
                                                        "bank_transfer"
                                                    )
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-building-bank w-16 h-16"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    ></path>
                                                    <path d="M3 21l18 0"></path>
                                                    <path d="M3 10l18 0"></path>
                                                    <path d="M5 6l7 -3l7 3"></path>
                                                    <path d="M4 10l0 11"></path>
                                                    <path d="M20 10l0 11"></path>
                                                    <path d="M8 14l0 3"></path>
                                                    <path d="M12 14l0 3"></path>
                                                    <path d="M16 14l0 3"></path>
                                                </svg>
                                                <span className="text-xs">
                                                    Bank Transfer &#40;VA&#41;
                                                </span>
                                            </ButtonIcon>
                                            <ButtonIcon
                                                className={`w-32 h-28 rounded-md shadow-md p-2 ${
                                                    props.values.payment_type ==
                                                        "cash" && "bg-slate-800"
                                                }`}
                                                onClick={() =>
                                                    props.setFieldValue(
                                                        "payment_type",
                                                        "cash"
                                                    )
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-16 h-16"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                    />
                                                </svg>
                                                <span className="text-xs">
                                                    Pay Cash
                                                </span>
                                            </ButtonIcon>
                                        </div>

                                        {props.values.payment_type ==
                                        "credit_card" ? (
                                            {
                                                /* <CreditCard values={props.values} /> */
                                            }
                                        ) : props.values.payment_type ==
                                          "bank_transfer" ? (
                                            <BankTransfer
                                                prices={searchParams}
                                                values={props.values}
                                                props={props}
                                                isLoading={isLoading}
                                            />
                                        ) : props.values.payment_type ==
                                          "cash" ? (
                                            <Cash
                                                prices={searchParams}
                                                values={props.values}
                                                props={props}
                                                isLoading={isLoading}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </section>
        </main>
    );
}

export default Page;
