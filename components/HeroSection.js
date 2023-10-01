import Image from "next/image";
import Button from "./Button";

function HeroSection() {
    return (
        <section className="hero bg-rose-100">
            <div className="hero-content w-full flex-col lg:flex-row items-start justify-between my-5">
                <div className="flex flex-col gap-10">
                    <h5 className="text-5xl font-bold text-red-500 leading-snug">
                        All Fast Food is
                        <br /> Available at Foodle
                    </h5>
                    <div className="flex gap-3">
                        <figure className="avatar">
                            <div className="w-12 rounded-full">
                                <Image
                                    src="/images/img/avatar.jpg"
                                    width={48}
                                    height={48}
                                    alt="avatar"
                                />
                            </div>
                        </figure>
                        <p className="text-md font-semibold text-slate-400 antialiased">
                            We Are Just A Click Away When You
                            <br /> Crave For Delicious Fast Food
                        </p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Button className="bg-red-600 border-0 rounded-3xl">
                            <Image
                                src="/images/svg/basket.svg"
                                height={30}
                                width={30}
                                alt="love"
                                className="bg-yellow-400 rounded-full p-1"
                            />
                            <span className="ml-2 capitalize font-bold text-base">
                                Buy Now
                            </span>
                        </Button>
                        <Button className="bg-transparent border-0 rounded-3xl">
                            <Image
                                src="/images/svg/play.svg"
                                height={40}
                                width={40}
                                alt="order"
                                className=" bg-white rounded-full p-1 border-red-600 border-l-4"
                            />
                            <span className="ml-2 capitalize font-bold text-base text-black">
                                How To Order
                            </span>
                        </Button>
                    </div>
                </div>
                <figure>
                    <Image
                        src="/images/svg/hamburger.svg"
                        width={300}
                        height={300}
                        alt="avatar"
                    />
                </figure>
            </div>
        </section>
    );
}

export default HeroSection;
