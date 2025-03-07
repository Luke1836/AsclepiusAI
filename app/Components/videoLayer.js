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
          <section className="transparent absolute top-[65%] contrast-200">
            <div className="min-w-svw h-[8rem] overflow-hidden relative flex flex-row ">
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {words.map((word, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <span className="text-[6rem] text-white font-dmserif">{word}</span>
                    <FontAwesomeIcon icon={faCircle} className="text-white w-4 h-4 translate-y-2" />
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
                    <span className="text-[6rem] text-white font-dmserif">{word}</span>
                    <FontAwesomeIcon icon={faCircle} className="text-white w-4 h-4 translate-y-2" />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
        
      ) }
    </main>
  );
}
