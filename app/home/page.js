"use client";
import { useUserContext } from "@/context/user-context";

function page() {
    const data = useUserContext();
    console.log(data);
    return <h1>page</h1>;
}

export default page;
