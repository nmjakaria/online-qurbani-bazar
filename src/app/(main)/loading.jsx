'use client';
import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full gap-4">
            {/* Main Spinner */}
            <span className="loading loading-spinner loading-lg text-primary"></span>
            
            {/* Supporting Text */}
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-700 animate-pulse">
                    Loading Livestock Data...
                </h2>
                <p className="text-gray-400 text-sm">
                    Fetching latest updates for you...
                </p>
            </div>

            {/* Optional: Subtle progress bar at the top of the screen */}
            <div className="fixed top-0 left-0 w-full h-1 bg-base-200 overflow-hidden">
                <div className="h-full bg-primary animate-progress-line"></div>
            </div>

            <style jsx>{`
                @keyframes progress-line {
                    0% { width: 0%; left: 0%; }
                    50% { width: 30%; left: 40%; }
                    100% { width: 0%; left: 100%; }
                }
                .animate-progress-line {
                    animation: progress-line 1.5s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Loading;