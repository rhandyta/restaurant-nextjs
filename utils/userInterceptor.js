"use client";

import { useGetCookieUser } from "@/hooks/useCookieUser";
import { useEffect } from "react";
import { useState } from "react";

function userInterceptor() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const getUser = useGetCookieUser();
    useEffect(() => {
        if (!getUser) {
            false;
        } else {
            setUser(JSON.parse(getUser.decryptedUserJsonString));
            setToken(getUser.decryptedTokenJsonString);
        }
    }, []);

    return { user, token };
}

export default userInterceptor;
