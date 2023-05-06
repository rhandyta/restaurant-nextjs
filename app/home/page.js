"use client";
import { useUserContext } from "@/context/user-context";
import { useGetCookieUser } from "@/hooks/useCookieUser";
import { useGetUser } from "@/hooks/useLocalStorageUser";
import { useEffect } from "react";

function page() {
    const { user, setUser, token, setToken } = useUserContext();
    const data = useGetCookieUser();
    useEffect(() => {
        setUser(JSON.parse(data.decryptedUserJsonString));
        setToken(data.decryptedTokenJsonString);
    }, []);
    return (
        <>
            <h1>{user?.lastname}</h1>
        </>
    );
}

export default page;
