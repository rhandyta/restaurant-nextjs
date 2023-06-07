"use client";

import { useGetCookieUser } from "@/hooks/useCookieUser";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const Router = useRouter();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // const data = useGetCookieUser();

    // useEffect(() => {
    //     if (data !== null) {
    //         setUser(JSON.parse(data.decryptedUserJsonString));
    //         setToken(data.decryptedTokenJsonString);
    //     }
    //     console.log("first");
    // }, []);

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
