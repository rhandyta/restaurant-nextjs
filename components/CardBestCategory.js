import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardBestCategory() {
    return (
        <div className="flex flex-col justify-center items-center">
            <figure>
                <Image
                    src="/images/svg/hamburger.svg"
                    width={300}
                    height={300}
                />
            </figure>
            <h6 className="font-bold text-2xl leading-3 mt-6">
                Chicken Burger
            </h6>
            <Link href="#">
                <p className="flex items-center gap-2 font-semibold mt-6 text-rose-600">
                    Order Now{" "}
                    <span>
                        <Image
                            src="/images/svg/arrow-up.svg"
                            width={12}
                            height={12}
                        />
                    </span>
                </p>
            </Link>
        </div>
    );
}

export default CardBestCategory;
