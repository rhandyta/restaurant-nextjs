"use client";
import CardTransaction from "@/components/CardTransaction";
import HeaderRes from "@/components/HeaderRes";
import { UserContext } from "@/context/user-context";
import { useContext, useEffect, useState } from "react";
import useGetTransaction from "./useGetTransaction";

export default function Transaction() {
    const { token } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [transactions, setTransactions] = useState({});

    const getTransaction = useGetTransaction;

    useEffect(() => {
        if (token) {
            getTransaction(token, setIsLoading)
                .then((res) => {
                    setTransactions(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setTransactions({});
        }
    }, [token]);
    return (
        <main>
            <div className="bg-rose-100 px-0 md:px-20 w-full m-0">
                <HeaderRes />
            </div>
            <h6 className="font-bold text-2xl text-slate-800 text-center mt-5 uppercase">
                Transaction List
            </h6>
            <section className="w-full mt-10 flex flex-col justify-center items-center gap-4 px-0 sm:px-20">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    transactions?.data?.map((transaction) => (
                        <CardTransaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))
                )}
            </section>
        </main>
    );
}
