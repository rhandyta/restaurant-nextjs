export const useGetBestCategory = async () => {
    try {
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}top-selling`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        const response = await request.json();
        return response.data; // Mengembalikan hasil respons
    } catch (error) {
        console.log(error);
        throw error; // Melempar kesalahan agar dapat ditangani di tempat lain
    }
};
