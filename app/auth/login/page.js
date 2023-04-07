"use client";
import Link from "next/link";
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Input from "@/components/Input";

function Login() {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(3),
    });

    const onSubmit = (values, props) => {
        //
    };
    return (
        <section className="h-96 md:h-auto">
            <h6 className="font-semibold text-4xl text-center">Login</h6>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Form className="flex flex-wrap">
                            <div className="form-control w-full">
                                <Label label="Email" />
                                <Input
                                    type="text"
                                    placeholder="Input your email"
                                    name="email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control w-full">
                                <Label label="Password" />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Input your password"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <Button
                                text="Login"
                                className="mt-5 btn-block btn-sm"
                            />
                        </Form>
                    );
                }}
            </Formik>
            <p className="mt-3 inline-block font-thin text-sm">
                don't have an account?{" "}
                <span className="hover:underline hover:text-blue-400">
                    <Link href="/auth/register">create now</Link>
                </span>
            </p>
        </section>
    );
}

export default Login;
