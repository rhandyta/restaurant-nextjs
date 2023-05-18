import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <main className="bg-base-200">
            <div className=" bg-rose-100 w-full px-20 m-0">
                <Header />
                <HeroSection />
            </div>
        </main>
    );
}
