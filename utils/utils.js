export const convertRupiah = (price) => {
    const rupiah = price?.toLocaleString("id-ID");
    return rupiah;
};

export const staticMethodPayment = {
    bank_transfer: [
        { id: 1, bank: "bca" },
        { id: 2, bank: "btn" },
        { id: 3, bank: "bni" },
        { id: 4, bank: "briva" },
        { id: 5, bank: "mandiri" },
    ],
    "e-wallet": [
        { id: 1, bank: "gopay" },
        { id: 2, bank: "dana" },
        { id: 3, bank: "ovo" },
        { id: 4, bank: "shopepay" },
    ],
};
