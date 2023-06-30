export const destroyItemCart = async (data) => {
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
        console.log(response);
        if (response.status_code !== 200) {
            throw Error(response.messages);
        }
        const tmpData = carts.filter((cart) => cart.id !== data);
        setCarts([...tmpData]);
        toastSuccess(response.messages);
    } catch (error) {
        toastError(error);
    }
};
