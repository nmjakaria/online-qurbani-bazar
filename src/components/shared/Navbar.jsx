"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import toast from "react-hot-toast";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const pathname = usePathname();

  // This will eventually come from Better Auth
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/animals" },
  ];

  const { setIsCartOpen } = useCart();

  const activeClass = "text-primary font-bold underline underline-offset-8";
  const inactiveClass = "hover:text-primary transition-colors";

  return (
    <div className="sticky top-0 z-50">
      <nav className="navbar bg-white/80 backdrop-blur-md shadow-sm px-4 md:px-12 sticky top-0 z-50">
        {/* Navbar Start: Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiMenu />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={pathname === link.path ? activeClass : ""}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-primary">
            Qurbani<span className="text-secondary">Hat</span>
          </Link>
        </div>
        {/* Navbar Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={pathname === link.path ? activeClass : inactiveClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar End: Auth Buttons */}
        <div className="navbar-end gap-3">
          {session ? (
            <div className="flex items-center justify-center gap-4">
              <button className="btn btn-ghost btn-sm relative" onClick={() => setIsCartOpen(true)}>
                <TiShoppingCart size={30} />
              </button>
              <h2>{`Welcome, ${user?.name}`}</h2>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src={user?.image || <FaUserCircle />} alt="User" width={40} height={40} suppressHydrationWarning={true} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/my-profile">My Profile</Link></li>
                  <li><button className="text-error font-bold" onClick={() => {
                    authClient.signOut({ callbackURL: '/' });
                    toast.success("You have been logged out.");
                  }}>Logout</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm hidden md:inline-flex">Login</Link>
              <Link href="/register" className="btn btn-primary btn-sm px-6">Register</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;