"use client";

import { createContext, useContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { useGetUser } from "@/hooks/useUser";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const auth = JSON.parse(useGetUser());
        const decryptedUserBytes = CryptoJS.AES.decrypt(auth.user, "user");
        const decryptedUserJsonString = decryptedUserBytes.toString(
            CryptoJS.enc.Utf8
        );
        const decryptedTokenBytes = CryptoJS.AES.decrypt(auth.token, "token");
        const decryptedTokenJsonString = decryptedTokenBytes.toString(
            CryptoJS.enc.Utf8
        );

        setUser(JSON.parse(decryptedUserJsonString));
        setToken(decryptedTokenJsonString);
    }, []);

    const userContextValue = {
        user,
        setUser,
        token,
        setToken,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
}
export function useUserContext() {
    return useContext(UserContext);
}
