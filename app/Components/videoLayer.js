"use client"; // Ensure this is a Client Component

import Header from "./header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  const styles = "text-[6rem] text-stone-50 text-center mb-8 font-dmserif inline-block nowrap item";
  const words = ["Innovation", "Implementation", "Health", "About", "Contact"];
  
  return (
    <main className="relative min-h-screen w-full">
      { isClient && (
        <>
          <Header />
          <video className="video-container bg-amber-950" muted loop autoPlay>
            {/* <source src="https://res.cloudinary.com/dydapmxhv/video/upload/v1741276311/final-1_1_mhgveb.mp4" type="video/mp4" /> */} 
          </video>
          <div className="transparent absolute top-[65%] contrast-200 mb-16">
            <div className="min-w-svw h-[8rem] overflow-hidden relative flex flex-row">
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {words.map((word, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <span className="text-[6rem] text-[#CED1BF] font-dmserif">{word}</span>
                    <FontAwesomeIcon icon={faCircle} className="text-[#CED1BF] w-4 h-4 translate-y-2" />
                  </div>
                ))}
              </motion.div>
              <div className="h-[6rem] w-[2rem]"></div>
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear",  }}
              >
                {words.map((word, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <span className="text-[6rem] text-[#CED1BF] font-dmserif">{word}</span>
                    <FontAwesomeIcon icon={faCircle} className="text-[#CED1BF] w-4 h-4 translate-y-2" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full h-[4rem] absolute top-[88%] border-t-1 border-t-[#CED1BF] mx-auto grid place-content-center contrast-200">
            <div className="h-[4rem] w-[30rem] text-[#CED1BF] text-center grid place-content-center">
              AI in medicine isn’t about replacing doctors; it’s about giving them superpowers to predict, prevent, and personalize care
            </div>
          </div>
        </>
      ) }
    </main>
  );
}
