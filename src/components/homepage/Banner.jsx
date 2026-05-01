"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    const sliderImages = [
        "https://i.ibb.co.com/chqZ542K/cow-photography-20048221.png", // Replace with your actual hosted image links
        "https://i.ibb.co.com/5gncpW0N/cow-20610191.png",
        "https://i.ibb.co.com/sd0p2sjR/cow3.png",
        "https://i.ibb.co.com/DH2Wz8Gg/cow4.png",
        "https://i.ibb.co.com/VWMbzQjB/cow5.png"
    ];

    return (
        <section className="bg-[#E5E5E5] min-h-125 flex items-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">

                {/* Left Side: Content */}
                <div className="order-2 lg:order-1 animate__animated animate__fadeInLeft">
                    <p className="italic text-gray-600 uppercase tracking-widest text-sm mb-2">
                        Naturally grown with love and compassion
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1D3557] mb-4">
                        HALAL & SAFE QURBANI
                    </h1>
                    <p className="text-gray-700 text-lg mb-8">
                        Celebrating EID UL AZHA Responsibly
                    </p>
                    <Link href="/animals">
                        <button className="btn border-none bg-primary hover:bg-[#060398] text-white font-bold px-8 rounded-full shadow-lg transition-all transform hover:scale-105 uppercase">
                            Explore All Cattle
                        </button>
                    </Link>
                </div>

                {/* Right Side: Auto-Scrolling Image Slider */}
                {/* Right Side: Auto-Scrolling Image Slider */}
                <div className="order-1 lg:order-2 w-full h-75 md:h-112.5">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "swiper-pagination-bullet-active !bg-[#FFD166]",
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper w-full h-full"
                    >
                        {sliderImages.map((img, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                {/* Parent MUST be relative for Image 'fill' to work */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`Livestock ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        unoptimized
                                        className="object-contain animate__animated animate__zoomIn"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles for Swiper Bullets */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #9ca3af;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #FFD166 !important;
          width: 25px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
        </section>
    );
};

export default Banner;