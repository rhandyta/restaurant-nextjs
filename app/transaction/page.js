import CardTransaction from "@/components/CardTransaction";
import HeaderRes from "@/components/HeaderRes";

export default function Transaction() {
    return (
        <main>
            <div className="bg-rose-100 px-20 w-full m-0">
                <HeaderRes />
            </div>
            <h6 className="font-bold text-2xl text-slate-800 text-center mt-5 uppercase">
                Transaction List
            </h6>
            <section className="w-full mt-10 flex flex-col justify-center items-center gap-4 px-0 sm:px-20">
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
            </section>
        </main>
    );
}
