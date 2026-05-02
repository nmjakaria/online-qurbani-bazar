import { getAllAnimals } from "@/lib/data";
import AnimalCard from "./AnimalCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeaturedAnimals = async () => {
    const allAnimals = await getAllAnimals() || [];
    
    if (!allAnimals.length) {
        return (
            <div className="min-h-100 flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    const featured = allAnimals.slice(0, 4);

    return (
        <section className="relative py-24 bg-linear-to-b from-white to-slate-50 overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                        Premium Selection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1D3557] mb-6">
                        Featured <span className="text-primary">Livestock</span>
                    </h2>
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <span className="w-12 h-1 bg-primary rounded-full"></span>
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span className="w-12 h-1 bg-primary rounded-full"></span>
                    </div>
                    <p className="max-w-xl mx-auto text-gray-500 text-lg leading-relaxed">
                        Explore our top-rated healthy animals, hand-picked for quality and sacred tradition.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featured.map((animal, index) => (
                        <div 
                            key={animal.id} 
                            className="animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <AnimalCard animal={animal} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link 
                        href="/animals" 
                        className="btn btn-primary btn-lg rounded-full px-12 shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
                    >
                        View All Animals
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedAnimals;