import AnimalCard from "@/components/homepage/AnimalCard";
import FilterAndSort from "@/components/homepage/FilterAndSort";
import QurbaniSidebar from "@/components/homepage/QurbaniSidebar";
import { getAllAnimals } from "@/lib/data";

export const metadata = {
  title: "All Animals - Online Qurbani Bazar",
  description: "Browse our extensive collection of sacrificial animals, hand-picked for quality and health. Find the perfect livestock for your Qurbani needs, with detailed information and transparent pricing. Shop with confidence and make your Qurbani experience seamless and meaningful.",
};

const AllAnimalsPage = async ({ searchParams }) => {
    const params = await searchParams;
    const sortOrder = params?.sort || "";
    const selectedType = params?.type || "";

    const allAnimals = await getAllAnimals() || [];
    
    // Filtering Logic
    let processedAnimals = [...allAnimals];
    if (selectedType) {
        processedAnimals = processedAnimals.filter(
            (animal) => animal.type.toLowerCase() === selectedType.toLowerCase()
        );
    }

    // Sorting Logic
    processedAnimals.sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });

    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6 bg-base-100 p-6 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-4xl font-bold text-[#1D3557]">Livestock Collection</h1>
                        <p className="text-gray-500">Showing {processedAnimals.length} animals</p>
                    </div>
                    <FilterAndSort />
                </div>

                {/* Main Content Layout: Grid + Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Left Side: Animal Grid (Flex-grow to take space) */}
                    <div className="grow">
                        {processedAnimals.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {processedAnimals.map((animal) => (
                                    <AnimalCard key={animal.id} animal={animal} />
                                ))}
                            </div>
                        ) : (
                            <div className="card bg-base-100 py-20 text-center shadow-sm">
                                <h3 className="text-2xl font-semibold">No animals found.</h3>
                                <p className="text-gray-500">Try changing your filters!</p>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Sidebar (Fixed width on large screens) */}
                    <aside className="w-full lg:w-80 shrink-0">
                        <div className="sticky top-24">
                            <QurbaniSidebar />
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default AllAnimalsPage;