"use client";
import React, { useEffect, useState } from "react";
import CardBestCategory from "./CardBestCategory";
import { useGetBestCategory } from "@/hooks/useHookBestCategory";

function BestCategorySection() {
    const bestCategory = useGetBestCategory;
    const [bestCategories, setBestCategories] = useState([]);

    const getBestCategories = async () => {
        try {
            const response = await bestCategory();
            setBestCategories(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBestCategories();
    }, []);
    return (
        <section className="pt-20 px-10 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-1/3">
                    <h6 className="text-3xl md:text-5xl font-bold">
                        Best <span className="text-rose-600">TOP</span> Selling
                    </h6>
                </div>
                <div className="w-1/2 md:w-72">
                    <p className="text-slate-400 antialiased">
                        Here Are Some Of Our Best Distributed Categories. If You
                        Want You Can Order From Here.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-wrap justify-center">
                    {bestCategories.map((food) => {
                        return (
                            <CardBestCategory key={food.id} product={food} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BestCategorySection;
