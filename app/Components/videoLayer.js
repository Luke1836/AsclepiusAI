"use client"; // Ensure this is a Client Component

import Header from "./header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const styles = "text-[6rem] text-stone-50 text-center"
  return (
    <main className="relative min-h-screen w-full">
      { isClient && (
        <>
          <Header />
          <video className="video-container bg-amber-950" muted loop autoPlay>
            {/* <source src="https://res.cloudinary.com/dydapmxhv/video/upload/v1741276311/final-1_1_mhgveb.mp4" type="video/mp4" /> */}
          </video>
          <section className="transparent absolute top-[65%] contrast-200">
            <div className="w-full flex flex-row items-center ">
            <p className="flex flex-row no wrap items-center gap-8">
              <span className={ styles }>Innovation</span>
              <FontAwesomeIcon icon={ faCircle } size="xl" style={{color: "#fff",}} />
              <span className={ styles }>Implementation</span>
              <FontAwesomeIcon icon={ faCircle } size="xl" style={{color: "#fff",}} />
              <span className={ styles }>Health</span>
              <FontAwesomeIcon icon={ faCircle } size="xl" style={{color: "#fff",}} />
              <span className={ styles }>About</span>
              <FontAwesomeIcon icon={ faCircle } size="xl" style={{color: "#fff",}} />
              <span className={ styles }>Contact</span>
              <FontAwesomeIcon icon={ faCircle } size="xl" style={{color: "#fff",}} />
            </p>
              

            </div>
            
          </section>
        </>
        
      ) }
    </main>
  );
}
