import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export const useSetCookieUser = (user, token) => {
    const encryptedUser = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "user"
    ).toString();
    const encryptedToken = CryptoJS.AES.encrypt(token, "token").toString();

    Cookies.set("token", encryptedToken, {
        // secure: true,
        // httpOnly: true,
        sameSite: "strict",
        domain: "localhost",
        path: "/",
        expires: 1,
    });

    Cookies.set("user", encryptedUser, {
        // secure: true,
        // httpOnly: true,
        sameSite: "strict",
        domain: "localhost",
        path: "/",
        expires: 1,
    });
};

export const useGetCookieUser = () => {
    const getTokenCookies = Cookies.get("token");
    const getUserCookies = Cookies.get("user");
    if (getTokenCookies && getUserCookies) {
        const decryptedUserBytes = CryptoJS.AES.decrypt(getUserCookies, "user");
        const decryptedUserJsonString = decryptedUserBytes.toString(
            CryptoJS.enc.Utf8
        );
        const decryptedTokenBytes = CryptoJS.AES.decrypt(
            getTokenCookies,
            "token"
        );
        const decryptedTokenJsonString = decryptedTokenBytes.toString(
            CryptoJS.enc.Utf8
        );
        return { decryptedUserJsonString, decryptedTokenJsonString };
    }
    return null;
};
