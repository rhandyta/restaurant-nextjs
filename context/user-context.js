"use client";

import { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

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
