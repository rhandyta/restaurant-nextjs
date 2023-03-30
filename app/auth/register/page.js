import React from "react";
import Link from "next/link";

function Register() {
    return (
        <section className="h-96 md:h-auto w-full">
            <h6 className="font-semibold text-4xl text-center">Register</h6>
            <form className="flex flex-wrap gap-1">
                <div className="form-control w-full flex-1">
                    <label className="label">
                        <span className="label-text text-lg">Firstname</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your firstname"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full flex-1">
                    <label className="label">
                        <span className="label-text text-lg">Lastname</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your lastname"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">
                            Middlename (optional)
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your middlename"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Input your email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Input your password"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Telephone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your telephone"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Address</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Address"
                    ></textarea>
                </div>
                <button className="btn mt-5 btn-block">Login</button>
            </form>
            <p className="mt-5 inline-block font-thin text-sm">
                already have an account?{" "}
                <span className="hover:underline hover:text-blue-400">
                    <Link href="/auth/login">login now</Link>
                </span>
            </p>
        </section>
    );
}

export default Register;
