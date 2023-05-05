"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import TextArea from "@/components/TextArea";
import useRegister from "./useRegister";
import ButtonLoading from "@/components/ButtonLoading";
import { useRouter } from "next/navigation";
import ErrorMessageField from "@/components/ErrorMessageField";

function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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
        middlename: yup.string(),
        lastname: yup.string().required(),
        email: yup.string().required().email(),
        telephone: yup.string().required(),
        address: yup.string().required(),
        password: yup.string().required().min(3),
    });

    const onSubmit = async (values, props) => {
        const result = await useRegister(values, setIsLoading);
        if (!result) return false;
        props.resetForm({ values: "" });
        router.push("/auth/login");
    };

    return (
        <section className="h-96 md:h-auto w-full">
            <h6 className="font-semibold text-4xl text-center">Register</h6>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Form>
                            <div className="flex flex-wrap gap-x-2 gap-y-0">
                                <div className="form-control w-full flex-1">
                                    <Label label="Firstname" />
                                    <Input
                                        type="text"
                                        name="firstname"
                                        placeholder="Input your firstname"
                                    />
                                    <ErrorMessageField name="firstname" />
                                </div>
                                <div className="form-control w-full flex-1">
                                    <Label label="Lastname" />
                                    <Input
                                        type="text"
                                        name="lastname"
                                        placeholder="Input your lastname"
                                    />
                                    <ErrorMessageField name="lastname" />
                                </div>
                                <div className="form-control w-full">
                                    <Label label="Middlename" />
                                    <Input
                                        type="text"
                                        name="middlename"
                                        placeholder="Input your middlename"
                                    />
                                    <ErrorMessageField name="middlename" />
                                </div>
                                <div className="form-control w-full ">
                                    <Label label="Email" />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Input your email"
                                    />
                                    <ErrorMessageField name="email" />
                                </div>
                                <div className="form-control w-full ">
                                    <Label label="Password" />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Input your password"
                                    />
                                    <ErrorMessageField name="password" />
                                </div>
                                <div className="form-control w-full ">
                                    <Label label="Telephone" />
                                    <Input
                                        type="text"
                                        name="telephone"
                                        placeholder="Input your telephone"
                                    />{" "}
                                    <ErrorMessageField name="telephone" />
                                </div>
                                <div className="form-control w-full">
                                    <Label label="Address" />
                                    <TextArea
                                        as="textarea"
                                        placeholder="Address"
                                        name="address"
                                    />
                                    <ErrorMessageField name="address" />
                                </div>
                                {isLoading === true ? (
                                    <ButtonLoading className="btn-block btn-sm mt-3" />
                                ) : (
                                    <Button
                                        type="submit"
                                        text="Register"
                                        className="btn-block btn-sm mt-3"
                                    />
                                )}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            <p className="mt-3 inline-block font-thin text-sm">
                already have an account?{" "}
                <span className="text-blue-600 hover:underline hover:text-blue-400">
                    <Link href="/auth/login">login now</Link>
                </span>
            </p>
        </section>
    );
}

export default Register;
