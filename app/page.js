import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";

export default function Home() {
    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <Header />
            </div>
            <LandingPage />
        </main>
    );
}
