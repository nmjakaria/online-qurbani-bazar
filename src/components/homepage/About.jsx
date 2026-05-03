import { IoMdCheckmark } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const About = () => {
    return (
        <div>
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                                Trusted Livestock Partner
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D3557]">
                                Quality Cattle, <br />
                                <span className="text-primary">Shariah-Compliant</span> Service
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                At Al-Madina Farms, we specialize in premium Qurbani livestock.
                                Every animal is raised with organic feed and regular veterinary check-ups
                                to ensure you receive the healthiest selection for your sacred sacrifice.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                        <IoMdCheckmark size={25} />

                                    </div>
                                    <span className="font-bold text-sm">Verified Seller</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <IoShieldCheckmarkOutline size={25} />

                                    </div>
                                    <span className="font-bold text-sm">100% Organic</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="rating rating-sm">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <input key={star} type="radio" className="mask mask-star-2 bg-orange-400" disabled checked={star === 5} />
                                        ))}
                                    </div>
                                    <span className="font-bold text-[#1D3557]">4.5 / 5.0</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <p className="text-sm italic text-gray-500">&quot;The cow I ordered was exactly as shown in the photos. The delivery was punctual and the team was very professional.&quot;</p>
                                        <p className="text-xs font-bold mt-2 text-primary">— Md. Rahman, Chittagong</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                            <div className="text-2xl font-black text-primary">500+</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400">Animals Sold</div>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                                            <div className="text-2xl font-black text-primary">1.2k</div>
                                            <div className="text-[10px] uppercase font-bold text-gray-400">Happy Clients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;