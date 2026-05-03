"use client";
import { useCart } from "@/context/CartContext";
import { X, CheckCircle, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
    const {
        isCartOpen, setIsCartOpen, cartItems, step, setStep, bookingInfo,
        setBookingInfo, showSuccess, setShowSuccess, resetAll
    } = useCart();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setBookingInfo(data);
        setStep("cart");
    };

    const handleFinalSubmit = () => {
        setShowSuccess(true);
        setTimeout(() => resetAll(), 3000);
    };

    if (!isCartOpen) return null;

    return (
        <div className="mx-auto">
            <div className="fixed inset-0 z-50 flex justify-end">
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setIsCartOpen(false)}
                />

                <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate__animated animate__slideInRight animate__faster">

                    <div className="p-6 border-b flex justify-between items-center bg-[#1D3557] text-white shrink-0">
                        <h2 className="font-bold text-lg">Qurbani Booking</h2>
                        <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto min-h-0 p-6 custom-scrollbar">
                        {showSuccess ? (
                            <div className="text-center py-20 animate__animated animate__zoomIn">
                                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-[#1D3557]">Success!</h3>
                                <p className="text-gray-500">Your booking has been received.</p>
                            </div>
                        ) : cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate__animated animate__fadeIn">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                                    <ShoppingBag size={40} className="text-gray-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1D3557]">Your cart is empty</h3>
                                    <p className="text-sm text-gray-400 max-w-50 mx-auto">
                                        Looks like you haven&#39;t selected any animals for Qurbani yet.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="btn btn-primary btn-sm rounded-full px-6"
                                >
                                    Browse Livestock
                                </button>
                            </div>
                        ) : step === "form" ? (
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <p className="text-sm text-gray-500 mb-4">Please provide your details to proceed with the booking.</p>
                                <input name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                                <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                                <input name="phone" type="tel" placeholder="Phone Number" className="input input-bordered w-full" required />
                                <textarea name="address" placeholder="Delivery Address" className="textarea textarea-bordered w-full" required />
                                <button type="submit" className="btn btn-primary w-full text-white">Continue to Cart</button>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold">Your Selection ({cartItems.length})</h3>
                                    <button onClick={() => setStep("form")} className="text-xs text-primary underline">Edit Info</button>
                                </div>

                                {/* Animal List */}
                                <div className="space-y-3">
                                    {cartItems.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-3 bg-base-200 rounded-xl">
                                            <div className="font-bold text-sm flex-1">
                                                <h2>{item.name} <span className="text-sm text-gray-500">({item.breed})</span></h2>
                                                <p className="text-xs text-gray-500">{item.category}</p>
                                            </div>
                                            <div className="text-primary font-bold text-sm">৳{item.price.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="divider" />
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">Total</h2>
                                    <div><span className="font-bold">৳{cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span></div>
                                </div>
                                <div className="divider" />

                                {/* Delivery Details Box */}
                                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50 text-[#1D3557]">
                                    <h3 className="text-sm font-black uppercase tracking-wider mb-3 text-primary flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        Delivery Details
                                    </h3>

                                    <div className="space-y-2.5">
                                        <div className="flex justify-between items-center text-[13px]">
                                            <span className="font-semibold opacity-70">Customer</span>
                                            <span className="font-bold">{bookingInfo?.name || "N/A"}</span>
                                        </div>

                                        <div className="flex justify-between items-center text-[13px]">
                                            <span className="font-semibold opacity-70">Email</span>
                                            <span className="truncate max-w-45 font-medium">{bookingInfo?.email || "N/A"}</span>
                                        </div>

                                        <div className="flex justify-between items-center text-[13px]">
                                            <span className="font-semibold opacity-70">Phone</span>
                                            <span className="font-medium">{bookingInfo?.phone || "N/A"}</span>
                                        </div>

                                        <div className="border-t border-blue-100 my-2 shadow-sm" />

                                        <div className="space-y-1">
                                            <span className="text-[11px] font-black uppercase opacity-50 tracking-tighter">Shipping Address</span>
                                            <p className="text-[13px] leading-relaxed font-medium italic text-gray-600">
                                                {bookingInfo?.address ? (
                                                    bookingInfo.address
                                                ) : (
                                                    <span className="text-gray-400 not-italic">No address provided yet</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {!showSuccess && step === "cart" && cartItems.length > 0 && (
                        <div className="p-6 border-t bg-white shrink-0">
                            <button
                                onClick={handleFinalSubmit}
                                className="btn btn-primary w-full text-white shadow-lg active:scale-95 transition-transform"
                            >
                                Confirm & Submit Booking
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}