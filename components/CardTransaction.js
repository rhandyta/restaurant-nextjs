import { convertRupiah } from "@/utils/utils";
import Link from "next/link";
import moment from "moment/moment";

export default function CardTransaction({ transaction }) {
    const createTransaction = moment(transaction.created_at).locale("id");
    return (
        <div className="w-full h-40 bg-rose-100 rounded-md shadow-md p-4 flex flex-col justify-between">
            <div className="flex gap-3 items-center">
                <div className="font-bold text-lg">
                    <p>{transaction.order_id}</p>
                </div>
                <div className="text-base">
                    <p>
                        {createTransaction.format("dddd, MMMM YYYY, kk:mm A")}
                    </p>
                </div>
                <div className="uppercase ">
                    <div className="badge badge-success text-lime-100">
                        {transaction.transaction_status}
                    </div>
                </div>
                <div className="text-sm font-thin">
                    <p>{transaction.transaction_id}</p>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-0 divide-x-2 divide-rose-200">
                <div className="col-span-5">
                    <div className="font-bold text-lg">
                        <p>Tagihan</p>
                    </div>
                    <div className="text-slate-500 uppercase">
                        <p>{`${transaction.bank} ${transaction.va_number}`}</p>
                    </div>
                </div>
                <div className="pl-3">
                    <div className="text-slate-500">
                        <p>Total Price</p>
                    </div>
                    <div className="font-bold">
                        <p>
                            Rp{convertRupiah(Number(transaction.gross_amount))}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center gap-3">
                <div className="text-rose-600">
                    <Link href="#">Transaction Detail</Link>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn bg-rose-600 border-none m-1"
                        >
                            ...
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Bantuan</a>
                            </li>
                            <li>
                                <a>Laporkan</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
