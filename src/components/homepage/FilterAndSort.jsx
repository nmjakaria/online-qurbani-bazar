"use client";

import { useRouter, useSearchParams } from "next/navigation";

const FilterAndSort = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateParams = (key, value) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/animals?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex gap-4 w-full lg:w-auto">
            {/* Filter by Type */}
            <div className="form-control w-full max-w-50">
                <label className="label text-xs font-bold uppercase text-gray-400">Animal Type</label>
                <select 
                    className="select select-bordered border-primary"
                    onChange={(e) => updateParams("type", e.target.value)}
                    value={searchParams.get("type") || ""}
                >
                    <option value="">All Animals</option>
                    <option value="Cow">Cows</option>
                    <option value="Goat">Goats</option>
                    <option value="Camel">Camels</option>
                </select>
            </div>

            {/* Sort by Price */}
            <div className="form-control w-full max-w-50">
                <label className="label text-xs font-bold uppercase text-gray-400">Sort Price</label>
                <select 
                    className="select select-bordered border-primary"
                    onChange={(e) => updateParams("sort", e.target.value)}
                    value={searchParams.get("sort") || ""}
                >
                    <option value="">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterAndSort;