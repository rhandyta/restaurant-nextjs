import HeaderRes from "@/components/HeaderRes";
import LandingPage from "@/components/LandingPage";

export default function Home() {
    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <HeaderRes />
            </div>
            <LandingPage />
        </main>
    );
}
