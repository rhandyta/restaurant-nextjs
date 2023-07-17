"use client";
import HeaderRes from "@/components/HeaderRes";
import React, { useContext, useEffect, useState } from "react";
import useTransactionDetail from "./useTransactionDetail";
import { UserContext } from "@/context/user-context";
import Image from "next/image";
import { convertRupiah } from "@/utils/utils";
import moment from "moment";
import StatusTransaction from "@/components/StatusTransaction";

function Page({ params }) {
    const [transDetail, setTransDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useContext(UserContext);
    const transactionDetail = useTransactionDetail;

    useEffect(() => {
        if (token) {
            transactionDetail(params.transaction_id, token, setIsLoading)
                .then((res) => {
                    setTransDetail(res);
                })
                .catch((error) => {
                    setTransDetail({});
                });
        } else {
            setTransDetail({});
        }
    }, [token]);
    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <HeaderRes />
            </div>
            <h6 className="font-bold text-2xl text-slate-800 text-center mt-5 uppercase">
                Transaction Details
            </h6>
            <section className="w-full mt-10 flex flex-col justify-center items-center gap-4 px-0 sm:px-20">
                <div className="w-full bg-rose-100 h-3/4 min-h-full rounded-md shadow-md py-3 px-5 flex gap-2">
                    <div className="w-[65%] min-h-full">
                        <div className="overflow-y-auto h-96">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-transparent">
                                            Product
                                        </th>
                                        <th className="bg-transparent">
                                            Quantity
                                        </th>
                                        <th className="bg-transparent">
                                            Price
                                        </th>
                                        <th className="bg-transparent"></th>
                                    </tr>
                                </thead>
                                <tbody className="border-none">
                                    {isLoading ? (
                                        <tr>
                                            <td className="bg-transparent">
                                                Loading...
                                            </td>
                                        </tr>
                                    ) : transDetail?.detailorders?.length >
                                      0 ? (
                                        transDetail?.detailorders?.map(
                                            (item, index) => (
                                                <tr key={index}>
                                                    <td className="bg-transparent">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <Image
                                                                        src={
                                                                            item
                                                                                .foodlist
                                                                                .foodimages[0]
                                                                                .image_url
                                                                        }
                                                                        alt="product"
                                                                        width={
                                                                            48
                                                                        }
                                                                        height={
                                                                            48
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">
                                                                    {
                                                                        item.product
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="bg-transparent">
                                                        <div className="flex gap-1 items-center">
                                                            <span>
                                                                {item.quantity}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="bg-transparent">
                                                        <span className="font-bold">
                                                            Rp
                                                            {convertRupiah(
                                                                Number(
                                                                    item.total_price
                                                                )
                                                            )}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td className="bg-transparent">
                                                Not found data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {!isLoading && (
                        <div className="flex flex-col justify-evenly gap-3 font-thin leading-relaxed">
                            <div>
                                <p>
                                    Status:{" "}
                                    <span className="font-semibold uppercase">
                                        <StatusTransaction
                                            status={
                                                transDetail.transaction_status
                                            }
                                        />
                                    </span>
                                </p>
                                <p>
                                    Tanggal Transaction:{" "}
                                    <span className="font-semibold">
                                        {moment(transDetail.created_at).format(
                                            "D MMMM YYYY, kk:mm A"
                                        )}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h6 className="font-bold">Detail Purchase</h6>
                                <p>
                                    Nama:{" "}
                                    <span className="font-semibold">
                                        {`${transDetail.user?.firstname} ${transDetail.user?.lastname}`}
                                    </span>
                                </p>
                                <p>
                                    Paid of Date:{" "}
                                    <span className="font-semibold">
                                        {moment(transDetail.updated_at).format(
                                            "D MMMM YYYY, kk:mm A"
                                        )}
                                    </span>
                                </p>
                                <p>
                                    Tax:{" "}
                                    <span className="font-semibold">
                                        Rp
                                        {convertRupiah(
                                            Number(transDetail.gross_amount) -
                                                Number(transDetail.amount)
                                        )}
                                    </span>
                                </p>
                                <p>
                                    Total Pay:{" "}
                                    <span className="font-semibold">
                                        Rp
                                        {convertRupiah(
                                            Number(transDetail.gross_amount)
                                        )}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h6 className="font-bold">
                                    Payment Information
                                </h6>
                                <p>
                                    Payment Method:{" "}
                                    <span className="font-semibold uppercase">
                                        {transDetail.bank}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Page;
