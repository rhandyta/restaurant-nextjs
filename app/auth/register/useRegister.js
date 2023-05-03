import { toastError, toastSuccess } from "@/components/Toast";

const useRegister = async (values, setIsLoading) => {
    try {
        setIsLoading(true);
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}auth/register`,
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
        if (response.status_code === 409) {
            throw new Error(response.messages);
        } else if (response.status_code !== 201) {
            throw new Error("Something went wrong!");
        }
        toastSuccess("Registration has been successfully");
        setIsLoading(false);
        return true;
    } catch (error) {
        toastError(error);
        setIsLoading(false);
        return false;
    }
};

export default useRegister;
