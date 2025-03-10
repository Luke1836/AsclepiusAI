"use client"; // Ensure this is a Client Component

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Header from "./header";


export default function VideoPlayer() 
{
  const [isClient, setIsClient] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("left");
  const [animationSpeed, setAnimationSpeed] = useState(20); // Default speed

  useEffect(() => {
    setIsClient(true);

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("right");
        setAnimationSpeed(20);
      } else {
        setScrollDirection("left");
        setAnimationSpeed(prevSpeed => Math.max(16, prevSpeed - 1));
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = ["Innovation", "Implementation", "Health", "About", "Contact"];

  return (
    <main className="relative h-screen w-full">
      {isClient && (
        <>
          <Header />
          <video className="video-container bg-amber-950" muted loop autoPlay>
            {/* <source src="https://res.cloudinary.com/dydapmxhv/video/upload/v1741276311/final-1_1_mhgveb.mp4" type="video/mp4" /> */}
          </video>
          <div className="transparent absolute top-[65%] contrast-200 mb-16 autoShow-1">
            <div className="w-svw h-[8rem] overflow-hidden relative flex flex-row gap-[1.5rem]">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex gap-8 whitespace-nowrap"
                  initial={{ x: "0%" }}
                  animate={{ x: scrollDirection === "left" ? "-100%" : "30%" }}
                  transition={{ repeat: Infinity, duration: animationSpeed, ease: "linear" }}
                >
                  {words.map((word, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <span className="text-[6rem] text-[#CED1BF] font-dmserif">{word}</span>
                      <FontAwesomeIcon icon={faCircle} className="text-[#CED1BF] w-4 h-4 translate-y-2" />
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full h-[4rem] absolute top-[88%] border-t-1 border-t-[#CED1BF] mx-auto grid place-content-center">
            <div className="h-[4rem] w-[16rem] md:w-[30rem] text-[0.75rem] md:text-[1rem] text-[#CED1BF] text-center grid place-content-center autoShow-2 font-medium">
              AI in medicine isn’t about replacing doctors; it’s about giving them superpowers to predict, prevent, and personalize care
            </div>
          </div>
          <div className="h-[4rem] text-[#CED1BF] hidden md:block text-[1.25rem] absolute top-[88%] left-[85%] lg:grid place-content-center autoShow-2 font-medium">
            Scroll to Explore
          </div>
        </>
      )}
    </main>
  );
}
