import { convertRupiah } from "@/utils/utils";
import Link from "next/link";
import moment from "moment/moment";
import StatusTransaction from "./StatusTransaction";

export default function CardTransaction({ transaction }) {
    const createTransaction = moment(transaction.created_at).locale("id");
    console.log(transaction)
    return (
        <div className="w-full h-80 md:h-40 bg-rose-100 rounded-md shadow-md p-4 flex flex-col justify-between">
            <div className="flex gap-3  flex-col md:flex-row items-center">
                <div className="font-bold text-lg">
                    <p>{transaction.order_id}</p>
                </div>
                <div className="text-base">
                    <p>
                        {createTransaction.format("dddd, MMMM YYYY, kk:mm A")}
                    </p>
                </div>
                <div className="uppercase">
                    <StatusTransaction
                        status={transaction.transaction_status}
                    />
                </div>
                <div className="text-sm font-thin">
                    <p>{transaction.transaction_id}</p>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-0 divide-x-2 divide-rose-200">
                <div className="col-span-4 md:col-span-5">
                    <div className="font-bold text-lg">
                        <p>Tagihan</p>
                    </div>
                    <div className="text-slate-500 uppercase">
                        <p>{transaction.bank ? transaction?.bank : transaction?.payment_type}   {transaction?.va_number ? transaction.va_number : ''}</p>
                    </div>
                </div>
                <div className="pl-3 col-auto">
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
                    <Link href={`/transaction/${transaction.transaction_id}`}>
                        Transaction Detail
                    </Link>
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
