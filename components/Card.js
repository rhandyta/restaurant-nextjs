import React from "react";
import Button from "./Button";
import Rating from "./Rating";
import Image from "next/image";
import { convertRupiah } from "@/utils/utils";

function Card({ food }) {
    return (
        <div className="card w-64 h-80 relative">
            <figure className="w-[170px] h-[170px] rounded-full bg-rose-400 absolute -right-10 bottom-48">
                <Image
                    src={food.foodimages[0].image_url}
                    alt={food.food_name}
                    width={150}
                    height={150}
                    className="rounded-full"
                />
            </figure>
            <div className="card-body bg-rose-100 rounded-3xl flex justify-end gap-3">
                <h2 className="card-title font-bold text-2xl">
                    {food.food_name}
                </h2>
                <div className="flex items-center gap-2">
                    <Rating rating={food.detailorders[0].rating ?? null} />
                    <span className="text-sm text-slate-400">
                        ({food.detailorders[0].total_product_id})
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-3xl">
                        Rp{convertRupiah(Number(food.price))}
                    </span>
                    <Button
                        text="Buy Now"
                        className="bg-rose-600 rounded-2xl w-fit border-none btn-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
