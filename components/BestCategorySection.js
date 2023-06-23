"use client";
import React, { useEffect, useState } from "react";
import CardBestCategory from "./CardBestCategory";
import { useGetBestCategory } from "@/hooks/useHookBestCategory";

function BestCategorySection() {
    const [bestCategories, setBestCategories] = useState([]);
    useEffect(() => {
        useGetBestCategory()
            .then((useBestCategory) => {
                setBestCategories(useBestCategory);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <section className="pt-20 px-20">
            <div className="flex justify-between">
                <div className="w-1/3">
                    <h6 className="text-5xl font-bold">
                        Best <span className="text-rose-600">TOP</span> Selling
                    </h6>
                </div>
                <div className="w-72">
                    <p className="text-slate-400 antialiased">
                        Here Are Some Of Our Best Distributed Categories. If You
                        Want You Can Order From Here.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-wrap justify-between">
                    {bestCategories.map((food) => {
                        return (
                            <CardBestCategory
                                key={food.product_id}
                                product_id={food.product_id}
                                foodlist={food.foodlist}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BestCategorySection;
