import ToastComponent from "@/components/ToastComponent";
import { UserContextProvider } from "@/context/user-context";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from "@/context/cart-context";
export const metadata = {
    title: "Restaurant Cepat Saji",
    description: "Hello World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <ToastComponent />
                <UserContextProvider>
                    <CartContextProvider>{children}</CartContextProvider>
                </UserContextProvider>
            </body>
        </html>
    );
}
