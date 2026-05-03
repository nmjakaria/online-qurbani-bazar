import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/shared/Navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Qurbani Bazar",
  description: "Your trusted online marketplace for premium sacrificial animals. Explore our curated selection of healthy livestock, hand-picked for quality and sacred tradition. Shop with confidence and make your Qurbani experience seamless and meaningful. ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar></Navbar>
          <main>
            {children}
            <Toaster></Toaster>
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
