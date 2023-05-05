import Image from "next/image";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Auth",
    description: "Hello World",
};

function LayoutAuth({ children }) {
    return (
        <main className="min-h-screen flex md:items-center">
            <div className="card md:card-side md:bg-base-100 md:shadow-xl mx-auto w-full md:w-auto md:my-10">
                <figure>
                    <Image
                        className="sm:hidden lg:block h-full bg-contain"
                        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                        width={400}
                        height={400}
                        unoptimized
                    />
                </figure>
                <div className="card-body max-w-[600px]">{children}</div>
            </div>
        </main>
    );
}

export default LayoutAuth;
