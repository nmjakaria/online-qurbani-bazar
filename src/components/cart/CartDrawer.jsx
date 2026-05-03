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
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

                <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate__animated animate__slideInRight animate__faster">
                    <div className="p-6 border-b flex justify-between items-center bg-[#1D3557] text-white">
                        <h2 className="font-bold text-lg">Qurbani Booking</h2>
                        <button onClick={() => setIsCartOpen(false)}><X /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">
                        {showSuccess ? (
                            <div className="text-center py-20 animate__animated animate__zoomIn">
                                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-[#1D3557]">Success!</h3>
                                <p className="text-gray-500">Your booking has been received.</p>
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
                                {cartItems.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-3 bg-base-200 rounded-xl">
                                        <div className="font-bold text-sm flex-1">{item.name}, {item.breed}</div>
                                        <div className="text-primary font-bold text-sm">৳{item.price.toLocaleString()}</div>
                                    </div>
                                ))}
                                <div className="divider" />
                                <div className="bg-blue-50 p-4 rounded-xl text-xs text-[#1D3557]">
                                    <strong>Delivering to:</strong>{" "}
                                    {bookingInfo?.address ? (
                                        <span className="italic">{bookingInfo.address}</span>
                                    ) : (
                                        "Address not provided"
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {!showSuccess && step === "cart" && (
                        <div className="p-6 border-t">
                            <button onClick={handleFinalSubmit} className="btn btn-primary w-full text-white">
                                Confirm & Submit Booking
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}