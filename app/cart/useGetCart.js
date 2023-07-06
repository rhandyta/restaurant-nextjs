import {
    toastError,
    toastSuccess,
    toastWarning,
} from "@/components/ToastComponent";

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
        if (response.status_code !== 200) {
            throw Error("Too many request");
        }
        return response;
    } catch (error) {
        toastWarning(error);
        return window.location.reload();
    }
};

export const useDestroyItem = async (data, token) => {
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
        toastSuccess(response.messages);
    } catch (error) {
        toastError(error);
    }
};
