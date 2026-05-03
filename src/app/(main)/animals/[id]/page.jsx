import { getAnimalById } from "@/lib/data";
import { Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimalById(id);

    if (!animal) {
        notFound();
    }


    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="container mx-auto">
                {/* Breadcrumbs */}
                <div className="text-sm breadcrumbs mb-6 text-gray-500">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/animals">Livestock</Link></li>
                        <li>{animal.name}</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-base-100 p-6 md:p-10 rounded-3xl shadow-xl animate__animated animate__fadeIn">

                    {/* Left: Image Section */}
                    <div className="space-y-4">
                        <div className="relative h-100 md:h-125 w-full rounded-2xl overflow-hidden shadow-inner">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                unoptimized
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute top-4 left-4 badge badge-primary p-4 font-bold">
                                {animal.category}
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Section */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold text-[#1D3557] mb-2">{animal.name}</h1>
                            <p className="text-xl text-primary font-bold mb-4">৳ {animal.price.toLocaleString()}</p>

                            <div className="divider">Details</div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-base-200 p-4 rounded-xl text-center">
                                    <p className="text-xs uppercase text-gray-500 font-bold">Breed</p>
                                    <p className="font-semibold">{animal.breed}</p>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl text-center">
                                    <p className="text-xs uppercase text-gray-500 font-bold">Weight</p>
                                    <p className="font-semibold">{animal.weight} KG</p>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl text-center">
                                    <p className="text-xs uppercase text-gray-500 font-bold">Age</p>
                                    <p className="font-semibold">{animal.age} Years</p>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl text-center">
                                    <p className="text-xs uppercase text-gray-500 font-bold">Location</p>
                                    <p className="font-semibold">{animal.location}</p>
                                </div>
                            </div>

                            <h3 className="font-bold text-lg mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {animal.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <button className="btn btn-primary flex-1 rounded-full text-white uppercase tracking-widest gap-2">
                                <Phone size={18} /> Contact Seller
                            </button>
                            <button
                                className="btn btn-outline btn-secondary flex-1 rounded-full uppercase tracking-widest gap-2"
                    
                            >
                                <ShoppingCart size={18} /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetails;