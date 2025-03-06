"use client"; // Ensure this is a Client Component

import Header from "./header";
import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full">
      { isClient && (
        <>
          <Header />
          <video className="video-container" muted loop autoPlay>
            <source src="https://res.cloudinary.com/dydapmxhv/video/upload/v1741276311/final-1_1_mhgveb.mp4" type="video/mp4" />
          </video>
          <section className="h-screen w-full absolute z-1 bg-[#020d1045]"></section>
        </>
        
      ) }
    </main>
  );
}
