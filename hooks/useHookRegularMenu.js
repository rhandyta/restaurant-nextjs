export const useGetRegularMenu = async () => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}regular-menu`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        const response = await request.json();
        if (response.status_code !== 200) {
            throw new Error("Something went wrong!");
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};
