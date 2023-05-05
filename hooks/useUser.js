import CryptoJS from "crypto-js";

export const useLoginUser = (user, token) => {
    const encryptedUser = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "user"
    ).toString();
    const encryptedToken = CryptoJS.AES.encrypt(token, "token").toString();
    localStorage.setItem(
        "auth",
        JSON.stringify({ user: encryptedUser, token: encryptedToken })
    );
};

export const useGetUser = () => {
    const getUserLocalStorage = localStorage.getItem("auth");
    return getUserLocalStorage;
};
