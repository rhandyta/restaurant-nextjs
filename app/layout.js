import "./globals.css";

export const metadata = {
    title: "Restaurant Cepat Saji",
    description: "Hello World",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body>{children}</body>
        </html>
    );
}
