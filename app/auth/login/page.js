"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ButtonLoading from "@/components/ButtonLoading";
import useLogin from "./useLogin";
import ErrorMessageField from "@/components/ErrorMessageField";
import { useRouter } from "next/navigation";
import { useGetCookieUser } from "@/hooks/useCookieUser";

function Login() {
    const loginForm = useLogin;
    const router = useRouter();
    const data = useGetCookieUser;
    const [isLoading, setIsLoading] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(3),
    });

    const onSubmit = async (values, props) => {
        console.log({ values, props });
        const result = await loginForm(values, setIsLoading);
        if (!result) return false;
        await props.resetForm({ values: "" });
        router.push("/");
    };

    useEffect(() => {
        // if (data !== null) return router.push("/home");
    }, []);
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
                        <div className="flex flex-wrap">
                            <div className="form-control w-full">
                                <Label label="Email" />
                                <Input
                                    type="text"
                                    placeholder="Input your email"
                                    name="email"
                                    className="input input-bordered w-full"
                                />
                                <ErrorMessageField name="email" />
                            </div>
                            <div className="form-control w-full">
                                <Label label="Password" />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Input your password"
                                    className="input input-bordered w-full"
                                />
                                <ErrorMessageField name="password" />
                            </div>
                            {isLoading ? (
                                <ButtonLoading className="btn-sm mt-3 btn-block" />
                            ) : (
                                <Button
                                    text="Login"
                                    type="submit"
                                    className="mt-3 btn-block btn-sm"
                                />
                            )}
                        </div>
                    );
                }}
            </Formik>
            <p className="mt-3 inline-block font-thin text-sm">
                don&#39;t have an account?{" "}
                <span className="text-blue-600 hover:underline hover:text-blue-400">
                    <Link href="/auth/register">create now</Link>
                </span>
            </p>
        </section>
    );
}

export default Login;
