export const useGetTableCategories = async (token) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}utils/tables`,
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
        if (response.status_code !== 200) throw Error("Something went wrong");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const useGetTable = async (id, token) => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}utils/table?id=${id}`,
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
        if (response.status_code !== 200) throw Error("Something went wrong");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
