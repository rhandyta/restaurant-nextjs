export default async function useGetTransaction(token, setIsLoading) {
    try {
        setIsLoading(true);
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}transaction`,
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
            setIsLoading(false);
            throw Error("Something went wrong");
        }
        return response.data;
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }
}
