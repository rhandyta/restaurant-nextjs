"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { useGetRegularMenu } from "@/hooks/useHookRegularMenu";

function RegularMenuSection() {
    const [regularMenus, setRegularMenus] = useState([]);
    useEffect(() => {
        useGetRegularMenu()
            .then((res) => {
                setRegularMenus(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(regularMenus);
    return (
        <section className="pt-20 px-20 pb-96">
            <div>
                <h6 className="text-5xl font-bold">
                    Our <span className="text-rose-600">Regular</span> Menu
                </h6>
                <div className="flex justify-between items-center mt-7">
                    <p className="text-slate-400 w-72">
                        These Are Our Regular Menus. You Can Order Anything You
                        Like.
                    </p>
                    <Button
                        text="See All"
                        className="bg-rose-600 border-none w-28 rounded-xl"
                    />
                </div>
            </div>

            <div className="mt-36 flex flex-wrap gap-28 place-content-between">
                {regularMenus.map((food) => {
                    return (
                        <Card
                            key={food.product.id}
                            foodlist={food.foodlist}
                            rating={food.rating}
                            totalReview={food.total_product_id}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default RegularMenuSection;
