import { toastError, toastSuccess } from "@/components/Toast";

const useLogin = async (values, setIsLoading) => {
    try {
        setIsLoading(true);
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}auth/login`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }
        );
        const response = await request.json();
        if (response.status_code === 401) {
            throw new Error(response.messages);
        } else if (response.status_code !== 200) {
            throw new Error("Something went wrong!");
        }
        console.log(response);
        toastSuccess(response.messages);
        setIsLoading(false);
        return true;
    } catch (error) {
        toastError(error);
        setIsLoading(false);
        return false;
    }
};

export default useLogin;
