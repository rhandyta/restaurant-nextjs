import {
    toastError,
    toastSuccess,
    toastWarning,
} from "@/components/ToastComponent";

export const useStoreProductToCart = async (
    user_id,
    product_id,
    token,
    setIsLoading
) => {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}cart`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                user_id,
                product_id,
                quantity: 1,
            }),
        });

        const response = await request.json();
        if (response.status_code === 409) {
            toastWarning("The product is already in the cart");
            setIsLoading(false);
            return false;
        }

        if (response.status_code !== 201) throw Error("Something went wrong");

        toastSuccess("Product successfully entered cart");
        setIsLoading(false);
        return true;
    } catch (error) {
        toastError(error);
        setIsLoading(false);
        return false;
    }
};
