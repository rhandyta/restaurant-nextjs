export const convertRupiah = (price) => {
    const rupiah = price?.toLocaleString("id-ID");
    return rupiah;
};

export const staticMethodPayment = {
    bank_transfer: [
        { id: 1, bank: "bca va" },
        { id: 2, bank: "btn va" },
        { id: 3, bank: "bni va" },
        { id: 4, bank: "briva" },
        { id: 5, bank: "mandiri va" },
    ],
    "e-wallet": [
        { id: 1, bank: "gopay" },
        { id: 2, bank: "dana" },
        { id: 3, bank: "ovo" },
        { id: 4, bank: "shopepay" },
    ],
};
