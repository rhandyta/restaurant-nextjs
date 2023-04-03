"use client";
import React from "react";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Input from "@/components/Input";

function Register() {
    const initialValues = {
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        telephone: "",
        address: "",
        password: "",
    };

    const validationSchema = yup.object({
        firstname: yup.string().required(),
        middlename: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().required().email(),
        telephone: yup.string().required(),
        address: yup.string().required(),
        password: yup.string().required().min(3),
    });

    const onSubmit = (values, props) => {
        //
    };

    return (
        <section className="h-96 md:h-auto w-full">
            <h6 className="font-semibold text-4xl text-center">Register</h6>
            <Formik>
                {(props) => {
                    return (
                        <Form
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            initialValues={initialValues}
                        >
                            <div className="flex flex-wrap gap-1">
                                <div className="form-control w-full flex-1">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Firstname
                                        </span>
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Input your firstname"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full flex-1">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Lastname
                                        </span>
                                    </label>
                                    <Input
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
                                    <Input
                                        type="text"
                                        placeholder="Input your middlename"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Email
                                        </span>
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Input your email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Password
                                        </span>
                                    </label>
                                    <Input
                                        type="password"
                                        placeholder="Input your password"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Telephone
                                        </span>
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Input your telephone"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg">
                                            Address
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered"
                                        placeholder="Address"
                                    ></textarea>
                                </div>
                                <button className="btn mt-5 btn-block">
                                    Login
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
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
