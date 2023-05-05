"use client";
import { useUserContext } from "@/context/user-context";

function page() {
    const data = useUserContext();
    console.log(data);
    return (
        <>
            <h1>{data.user?.firstname}</h1>
            <button
                onClick={() =>
                    data.setUser({ ...data.user, firstname: "anjay" })
                }
            >
                Clicked
            </button>
        </>
    );
}

export default page;
