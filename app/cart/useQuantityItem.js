import { toastError, toastSuccess } from "@/components/ToastComponent";

export const incrementQuantity = async (id, setIsLoadingQuantity, token) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}cart/${id}/increment`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const response = await request.json();
        if (response.status_code != 200) {
            throw Error("Something went wrong");
        }
        setIsLoadingQuantity(false);
        toastSuccess("Quantity has been updated");
    } catch (error) {
        toastError(error);
        setIsLoadingQuantity(false);
    }
};

export const decrementQuantity = async (id, setIsLoadingQuantity, token) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}cart/${id}/decrement`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const response = await request.json();
        if (response.status_code != 200) {
            throw Error("Something went wrong");
        }
        setIsLoadingQuantity(false);
        toastSuccess("Quantity has been updated");
    } catch (error) {
        toastError(error);
        setIsLoadingQuantity(false);
    }
};
