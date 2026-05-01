import React from 'react';

const Loading = () => {
    // Create an array of 3 items to show 3 skeleton cards
    const skeletonCards = [1, 2, 3];

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4">
            {/* 1. Left Sidebar Skeleton */}
            <div className="col-span-3">
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-8 w-3/4 mb-4"></div>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="skeleton h-12 w-full"></div>
                    ))}
                </div>
            </div>

            {/* 2. Main Content Skeleton (News Cards) */}
            <div className="col-span-6">
                <div className="skeleton h-8 w-48 mb-6"></div> {/* Title: Dragon News Home */}
                
                <div className="flex flex-col gap-6">
                    {skeletonCards.map((i) => (
                        <div key={i} className="card w-full bg-base-100 border border-gray-100 shadow-sm rounded-md p-5 flex flex-col gap-4">
                            {/* Author Header Skeleton */}
                            <div className="flex items-center gap-3">
                                <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="skeleton h-4 w-32"></div>
                                    <div className="skeleton h-3 w-24"></div>
                                </div>
                            </div>

                            {/* Title Skeleton */}
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-6 w-4/5"></div>

                            {/* Image Skeleton */}
                            <div className="skeleton h-72 w-full rounded-xl"></div>

                            {/* Details Skeleton */}
                            <div className="flex flex-col gap-2">
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-2/3"></div>
                            </div>

                            {/* Footer Skeleton */}
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                <div className="skeleton h-5 w-24"></div>
                                <div className="skeleton h-5 w-16"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Right Sidebar Skeleton */}
            <div className="col-span-3">
                <div className="flex flex-col gap-8">
                    {/* Login With */}
                    <div className="flex flex-col gap-3">
                        <div className="skeleton h-6 w-32"></div>
                        <div className="skeleton h-12 w-full"></div>
                        <div className="skeleton h-12 w-full"></div>
                    </div>
                    {/* Find Us On */}
                    <div className="flex flex-col gap-3">
                        <div className="skeleton h-6 w-32"></div>
                        <div className="skeleton h-48 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;