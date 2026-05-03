"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Phone } from "lucide-react";


export default function AnimalActions({ animal }) {
  const { addToCart } = useCart();


  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
      <button className="btn btn-primary flex-1 p-3 rounded-full text-white uppercase tracking-widest gap-2">
        <Phone size={18} /> Contact Seller
      </button>
      <button 
        className="btn btn-outline btn-secondary flex-1 p-3 rounded-full uppercase tracking-widest gap-2" 
        onClick={() => addToCart(animal)}
      >
        <ShoppingCart size={18} /> Add to Cart
      </button>
    </div>
  );
}