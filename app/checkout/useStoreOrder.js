import { toastError, toastSuccess } from "@/components/ToastComponent";

export const useStoreOrder = async (order, token, setIsLoading) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}order/checkout`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(order),
            }
        );
        const response = await request.json();
        if (response.status_code !== 201) {
            throw Error("Something went wrong");
        }
        setIsLoading(false);
        toastSuccess("Pay Success");
        return console.log(true);
    } catch (error) {
        setIsLoading(false);
        toastError(error);
        return console.log(false);
    }
};
