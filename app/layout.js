import ToastComponent from "@/components/ToastComponent";
import { UserContextProvider } from "@/context/user-context";
import "./globals.css";
export const metadata = {
    title: "Restaurant Cepat Saji",
    description: "Hello World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="night">
            <body>
                <UserContextProvider>
                    <ToastComponent />
                    {children}
                </UserContextProvider>
            </body>
        </html>
    );
}
