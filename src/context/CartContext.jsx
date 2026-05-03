"use client";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState(null);
  const [step, setStep] = useState("form");
  const [showSuccess, setShowSuccess] = useState(false);

  const addToCart = (animal) => {
    setCartItems((prev) => [...prev, animal]);
    setStep(bookingInfo ? "cart" : "form");
    setIsCartOpen(true);
    setShowSuccess(false);

    toast.success(`${animal.name} added to cart!`, {
      duration: 2000,
      position: "top-center",
    });
  };

  const resetAll = () => {
    setCartItems([]);
    setBookingInfo(null);
    setIsCartOpen(false);
    setStep("form");
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, isCartOpen, setIsCartOpen, 
      bookingInfo, setBookingInfo, step, setStep, 
      showSuccess, setShowSuccess, resetAll 
    }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  
  return context;
};