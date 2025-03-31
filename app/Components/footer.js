"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#30493D] text-[#CED1BF] p-8 md:p-12">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/3 grid place-content-center">
          <div className="h-[10rem] w-[10rem] lg:h-[12rem] lg:w-[12rem]">
            <Link href="/">
              <img src="/Logo.png" alt="Company's logo" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <ul className="space-y-4 text-[1.25rem]">
            <li><a href="#about" className="hover:text-[#41A1BC] transition">About Us</a></li>
            <li><a href="#health" className="hover:text-[#41A1BC] transition">Health</a></li>
            <li><a href="#implementation" className="hover:text-[#41A1BC] transition">Implementation</a></li>
            <li><a href="#innovation" className="hover:text-[#41A1BC] transition">Innovation</a></li>
            <li><a href="#contact" className="hover:text-[#41A1BC] transition">Contact</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-[#CED1BF] hover:text-[#41A1BC]">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#CED1BF] hover:text-[#41A1BC]">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#CED1BF] hover:text-[#41A1BC]">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#CED1BF] hover:text-[#41A1BC]">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#CED1BF] pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AsclepiusAI. All rights reserved.</p>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#41A1BC] text-white p-3 rounded-full shadow-lg hover:bg-[#2F889E] transition"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </footer>
  );
}
