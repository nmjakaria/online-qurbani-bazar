import { Mail, MapPinMinus, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import Logo from "@/assets/qurbani-hat-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D3557] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="QurbaniHat Logo" width={40} height={40} className="inline-block mr-2 bg-white rounded-full p-1" />
              <h2 className="text-2xl font-black tracking-tighter text-white">
                Qurbani<span className="text-primary">Hat</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplifying the sacred tradition of Qurbani through technology. 
              Connecting you with healthy, halal livestock from the best farms 
              in Bangladesh.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors duration-300">
                <FaFacebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors duration-300">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors duration-300">
                <FaTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/animals" className="hover:text-primary transition-colors">Explore Animals</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/guidelines" className="hover:text-primary transition-colors">Qurbani Guidelines</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Categories</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/animals?type=cow" className="hover:text-primary transition-colors">Premium Cows</Link></li>
              <li><Link href="/animals?type=goat" className="hover:text-primary transition-colors">Healthy Goats</Link></li>
              <li><Link href="/animals?type=sheep" className="hover:text-primary transition-colors">Dumba & Sheep</Link></li>
              <li><Link href="/animals?type=camel" className="hover:text-primary transition-colors">Large Camels</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPinMinus size={20} className="text-primary shrink-0" />
                <span>Chittagong South, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>support@qurbanihat.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} QurbaniHat. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;