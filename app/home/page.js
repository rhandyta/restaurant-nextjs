"use client";
import { useUserContext } from "@/context/user-context";
import { useGetUser, useSetUser } from "@/hooks/useUser";
import { useEffect } from "react";

function page() {
    const { user, setUser, token, setToken } = useUserContext();
    const data = useGetUser();
    useEffect(() => {
        setUser(JSON.parse(data.decryptedUserJsonString));
        setToken(data.decryptedTokenJsonString);
    }, []);
    return (
        <>
            <h1>{user?.firstname}</h1>
        </>
    );
}

export default page;
