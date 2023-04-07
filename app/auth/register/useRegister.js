const useRegister = async (data) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}auth/register`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const response = await request.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

export default useRegister;
