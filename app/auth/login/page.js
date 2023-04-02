"use client";

import Link from "next/link";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

function Login() {
    return (
        <section className="h-96 md:h-auto">
            <h6 className="font-semibold text-4xl text-center">Login</h6>
            <form className="flex flex-wrap">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Input your password"
                        className="input input-bordered w-full"
                    />
                </div>
                <button className="btn mt-5">Login</button>
            </form>
            <p className="mt-5 inline-block font-thin text-sm">
                don't have an account?{" "}
                <span className="hover:underline hover:text-blue-400">
                    <Link href="/auth/register">create now</Link>
                </span>
            </p>
        </section>
    );
}

export default Login;
