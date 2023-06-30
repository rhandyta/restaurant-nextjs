import { toastError, toastSuccess } from "@/components/ToastComponent";

export const useGetCart = async (token) => {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}cart`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const useDestroyItem = async (
    data,
    setIsLoading,
    carts,
    setCarts,
    token
) => {
    try {
        const id = {
            id: [data],
        };

        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}cart/destroy`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(id),
            }
        );
        const response = await request.json();
        if (response.status_code !== 200) {
            throw Error(response.messages);
        }
        const tmpData = carts.filter((cart) => cart.id !== data);
        setCarts([...tmpData]);
        toastSuccess(response.messages);
        setIsLoading(false);
    } catch (error) {
        toastError(error);
        setIsLoading(false);
    }
};
