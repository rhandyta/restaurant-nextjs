import { useGetCookieUser } from "@/hooks/useCookieUser";

export const useGetCart = async () => {
    const { decryptedTokenJsonString } = useGetCookieUser();

    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}cart`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${decryptedTokenJsonString}`,
            },
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};
