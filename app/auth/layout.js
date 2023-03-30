import React from "react";

export const metadata = {
    title: "Auth",
    description: "Hello World",
};

function LayoutAuth({ children }) {
    return (
        <main className="bg-slate-50 min-h-screen flex items-center">
            <div className="card md:card-side md:bg-base-100 sm:bg-slate-50 md:shadow-xl mx-auto w-full md:w-auto ">
                <figure>
                    <img
                        className="sm:hidden md:block"
                        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                    />
                </figure>
                <div className="card-body">{children}</div>
            </div>
        </main>
    );
}

export default LayoutAuth;
