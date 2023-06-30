import ToastComponent from "@/components/ToastComponent";
import { UserContextProvider } from "@/context/user-context";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
    title: "Restaurant Cepat Saji",
    description: "Hello World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <ToastComponent />
                <UserContextProvider>{children}</UserContextProvider>
            </body>
        </html>
    );
}
