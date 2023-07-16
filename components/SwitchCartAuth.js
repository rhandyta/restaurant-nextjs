"use client";
import Link from "next/link";
import { UserContext } from "@/context/user-context";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useGetCookieUser } from "@/hooks/useCookieUser";
function SwitchCartAuth() {
    const data = useGetCookieUser();
    const { user, token, setUser, setToken } = useContext(UserContext);

    useEffect(() => {
        if (data !== null) {
            setUser(JSON.parse(data.decryptedUserJsonString));
            setToken(data.decryptedTokenJsonString);
        }
    }, []);
    return (
        <>
            {!user && (
                <>
                    <Link
                        href="/auth/login"
                        className="btn bg-transparent text-rose-600 border-0 hover:bg-slate-300"
                    >
                        Login
                    </Link>
                    <Link
                        href="/auth/register"
                        className="btn bg-transparent text-rose-600 border-1 border-red-400 rounded-3xl hover:bg-slate-300"
                    >
                        Sign Up
                    </Link>
                </>
            )}
            {user && (
                <div className="flex items-center justify-center gap-3">
                    <Link href="/transaction">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-rose-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    </Link>
                    <Link href="/cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-rose-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </>
    );
}

export default SwitchCartAuth;
