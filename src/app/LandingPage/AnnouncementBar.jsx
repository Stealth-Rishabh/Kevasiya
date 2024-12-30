import React, { useState } from "react";
// import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, MessageCircle } from 'lucide-react';
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/X.svg";
import Youtube from "../../assets/Youtube.svg";
import ArrowDown from "../../assets/ArrowDown.svg";

export default function AnnouncementBar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
    { icon: Whatsapp, href: "#", label: "WhatsApp" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const languages = ["English", "Hindi", "Gujarati"];

  return (
    <div className="relative bg-[#C4A484] px-4 py-2 text-white">
      <div className="mx-auto flex max-w-7xl sm:px-3 flex-wrap items-center justify-center sm:justify-between gap-2">
        {/* Social Icons */}
        <div className="items-center hidden sm:flex space-x-3 sm:space-x-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="transition-opacity hover:opacity-80 focus:opacity-80 focus:outline-none"
              aria-label={label}
            >
              {/* <Icon className="h-4 w-4" /> */}
              <img src={Icon} alt="Facebook" className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Announcement Text */}
        <p className="text-center text-sm font-light sm:text-base">
          FREE SHIPPING* on orders of ₹550 or more.
        </p>

        {/* Language Selector */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none"
            aria-expanded={isLanguageOpen}
            aria-haspopup="true"
          >
            <span>English</span>
            <img
              src={ArrowDown}
              alt="Arrow Down"
              className={`h-3 w-3 transition-transform duration-200 ${
                isLanguageOpen ? "rotate-180" : ""
              }`}
            />
            {/* <ArrowDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isLanguageOpen ? "rotate-180" : ""
              }`}
            /> */}
          </button>

          {/* Language Dropdown */}
          {isLanguageOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsLanguageOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-1 w-32 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                {languages.map((language) => (
                  <button
                    key={language}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    onClick={() => setIsLanguageOpen(false)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
