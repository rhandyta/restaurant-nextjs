import BestCategorySection from "@/components/BestCategorySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RegularMenuSection from "@/components/RegularMenuSection";

export default function Home() {
    return (
        <main className="bg-base-200">
            <div className=" bg-rose-100 px-20 w-full m-0">
                <Header />
                <HeroSection />
            </div>
            <BestCategorySection />
            <RegularMenuSection />
        </main>
    );
}
