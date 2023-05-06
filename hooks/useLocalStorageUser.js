import CryptoJS from "crypto-js";

export const useSetUser = (user, token) => {
    const encryptedUser = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "user"
    ).toString();
    const encryptedToken = CryptoJS.AES.encrypt(token, "token").toString();

    if (typeof localStorage !== "undefined") {
        localStorage.setItem(
            "auth",
            JSON.stringify({ user: encryptedUser, token: encryptedToken })
        );
    }
};

export const useGetUser = () => {
    if (typeof localStorage !== "undefined") {
        if (localStorage.getItem("auth")) {
            const getUserLocalStorage = JSON.parse(
                localStorage.getItem("auth")
            );
            const decryptedUserBytes = CryptoJS.AES.decrypt(
                getUserLocalStorage.user,
                "user"
            );
            const decryptedUserJsonString = decryptedUserBytes.toString(
                CryptoJS.enc.Utf8
            );
            const decryptedTokenBytes = CryptoJS.AES.decrypt(
                getUserLocalStorage.token,
                "token"
            );
            const decryptedTokenJsonString = decryptedTokenBytes.toString(
                CryptoJS.enc.Utf8
            );
            return { decryptedUserJsonString, decryptedTokenJsonString };
        }
    }
    return null;
};
