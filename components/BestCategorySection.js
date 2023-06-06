import React from "react";
import CardBestCategory from "./CardBestCategory";

function BestCategorySection() {
    return (
        <section className="pt-20 px-20">
            <div className="flex justify-between">
                <div className="w-1/3">
                    <h6 className="text-5xl font-bold">
                        Best <span className="text-rose-600">Delivered</span>{" "}
                        Categories
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
                    <CardBestCategory />
                    <CardBestCategory />
                    <CardBestCategory />
                </div>
            </div>
        </section>
    );
}

export default BestCategorySection;
