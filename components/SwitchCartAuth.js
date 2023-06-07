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
                <Link href="#">
                    <Image
                        src="/images/svg/basket.svg"
                        width={35}
                        height={35}
                        alt="basket"
                    />
                </Link>
            )}
        </>
    );
}

export default SwitchCartAuth;
