import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
function Cart() {
    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <Header />
            </div>
            <section className="px-20 w-full mt-10">
                <div className="w-full min-h-96 flex justify-between">
                    <div className="w-[75%] min-h-full">
                        <div className="overflow-y-scroll h-96">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
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
                                                            src="/tailwind-css-component-profile-2@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Hart Hagerty
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        United States
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Desktop Support Technician
                                            </span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
                                    {/* row 2 */}
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
                                                            src="/tailwind-css-component-profile-3@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Brice Swyre
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        China
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Carroll Group
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Tax Accountant
                                            </span>
                                        </td>
                                        <td>Red</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
                                    {/* row 3 */}
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
                                                            src="/tailwind-css-component-profile-4@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Marjy Ferencz
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Russia
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Rowe-Schoen
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Office Assistant I
                                            </span>
                                        </td>
                                        <td>Crimson</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
                                    {/* row 4 */}
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
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
                                                            src="/tailwind-css-component-profile-5@56w.png"
                                                            alt="Avatar Tailwind CSS Component"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        Yancy Tear
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        Brazil
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                Community Outreach Specialist
                                            </span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                details
                                            </button>
                                        </th>
                                    </tr>
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="w-[20%] min-h-max flex flex-col justify-between bg-rose-200">
                        <div className="bg-slate-200 h-[35%] flex flex-col justify-center p-5">
                            <p>Have a coupon?</p>
                            <div className="flex mt-2">
                                <input
                                    name="coupon"
                                    placeholder="Coupon Code"
                                    className="border border-rose-600 w-[80%] p-1"
                                />
                                <Button
                                    text="Apply"
                                    className="btn-sm rounded-none"
                                />
                            </div>
                        </div>
                        <div className="bg-slate-200 h-[55%] p-5">
                            <div className="border-b-2 border-slate-400">
                                <p>
                                    Total Price: <span>$69.97</span>
                                </p>
                                <p>
                                    Discount: <span>- $10.00</span>
                                </p>
                                <p>Total: $57.97</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Cart;
