import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export const useSetCookieUser = async (user, token) => {
    Cookies.set("token", "ayam", 1);

    // const encryptedUser = CryptoJS.AES.encrypt(
    //     JSON.stringify(user),
    //     "user"
    // ).toString();
    // const encryptedToken = CryptoJS.AES.encrypt(token, "token").toString();
    // localStorage.setItem(
    //     "auth",
    //     JSON.stringify({ user: encryptedUser, token: encryptedToken })
    // );
};
