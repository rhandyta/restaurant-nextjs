import Link from "next/link";

export default function CardTransaction() {
    return (
        <div className="w-full h-40 bg-rose-100 rounded-md shadow-md p-4 flex flex-col justify-between">
            <div className="flex gap-3 items-center">
                <div className="font-bold text-lg">
                    <p>OR150723m8VCFY</p>
                </div>
                <div className="text-base">
                    <p>16 Juli 2023</p>
                </div>
                <div className="uppercase ">
                    <div className="badge badge-success text-lime-100">
                        succeed
                    </div>
                </div>
                <div className="text-sm font-thin">
                    <p>2896c8da-c698-4ea9-8cf5-a8512ee6b27e</p>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-0 divide-x-2 divide-rose-200">
                <div className="col-span-5">
                    <div className="font-bold text-lg">
                        <p>Tagihan</p>
                    </div>
                    <div className="text-slate-500">
                        <p>32432423****</p>
                    </div>
                </div>
                <div className="pl-3">
                    <div className="text-slate-500">
                        <p>Total Price</p>
                    </div>
                    <div className="font-bold">
                        <p>Rp23.589</p>
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
