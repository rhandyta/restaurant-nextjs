import ToastComponent from "@/components/ToastComponent";
import Header from "@/components/header";

import { UserContextProvider } from "@/context/user-context";
import "./globals.css";
export const metadata = {
    title: "Restaurant Cepat Saji",
    description: "Hello World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <UserContextProvider>
                    <main>
                        <ToastComponent />
                        <div className="bg-rose-100 px-20 w-full m-0">
                            <Header />
                        </div>
                        {children}
                    </main>
                </UserContextProvider>
            </body>
        </html>
    );
}
