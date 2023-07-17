import { toastError } from "@/components/ToastComponent";

export default async function useTransactionDetail(
    transaction_id,
    token,
    setIsLoading
) {
    try {
        setIsLoading(true);
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}transaction/search?query=${transaction_id}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const response = await request.json();

        if (response.status_code !== 200) {
            throw Error(response.messages);
        }
        setIsLoading(false);
        return response.data;
    } catch (error) {
        setIsLoading(false);
        toastError(error);
    }
}
