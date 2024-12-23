import React, { useState } from "react";
import Logo from "../assets/KevasiyaLogo.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Search from "../assets/Search.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="relative border-b border-gray-200 bg-white px-4 py-2 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="Kevasiya Logo" className="h-16" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C4A484] md:hidden"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <img src={Close} alt="Close" />
            ) : (
              <img src={Menu} alt="Menu" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks />
          </div>

          {/* Icons */}
          <div className="hidden items-center space-x-4 md:flex">
            <NavIcons cartCount={cartCount} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } absolute left-0 top-full z-20 w-full transform bg-white px-4 py-2 shadow-lg transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="space-y-4 py-4">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile />
          </div>
          <div className="flex justify-center space-x-6 border-t border-gray-200 pt-4">
            <NavIcons cartCount={cartCount} mobile />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

function NavLinks({ mobile }) {
  const links = [
    { name: "About Kevasiya", href: "/about" },
    { name: "Our Gifting Collections", href: "/collections" },
    { name: "Contact Us", href: "/contact" },
  ];

  return links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`text-base font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#C4A484] ${
        mobile ? "block py-2 text-center" : ""
      }`}
    >
      {link.name}
    </a>
  ));
}

function NavIcons({ cartCount, mobile }) {
  return (
    <>
      <button
        className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-[#C4A484] focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
        aria-label="Search"
      >
        <img src={Search} alt="Search" className="h-5 w-5" />
      </button>
      <button
        className="relative rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-[#C4A484] focus:outline-none focus:ring-2 focus:ring-[#C4A484] flex items-center justify-center"
        aria-label="Shopping cart"
      >
        <img src={Cart} alt="Cart" className="h-7 w-7" />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C4A484] text-xs text-white">
            {cartCount}
          </span>
        )}
      </button>
      <button
        className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-[#C4A484] focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
        aria-label="User account"
      >
        <img src={User} alt="User" className="h-5 w-5" />
      </button>
    </>
  );
}
