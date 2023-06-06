import React from "react";
import Button from "./Button";
import Rating from "./Rating";

function Card() {
    return (
        <div className="card w-64 h-80 relative">
            <figure className="w-[220px] h-[220px] rounded-full bg-red-700 absolute left-20 bottom-40">
                <div className="w-[180px] h-[180px] rounded-full bg-slate-700"></div>
            </figure>
            <div className="card-body bg-rose-100 rounded-3xl flex justify-end gap-3">
                <h2 className="card-title font-bold text-2xl">
                    Chicken Burger
                </h2>
                <div className="flex items-center gap-2">
                    <Rating />{" "}
                    <span className="text-sm text-slate-400">(142)</span>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-3xl">$3.50</p>
                    <Button
                        text="Buy Now"
                        className="bg-rose-600 rounded-2xl w-fit border-none"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
