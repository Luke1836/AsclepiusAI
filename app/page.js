'use client';

import Video from "./Components/videoLayer"
import AboutPage from "./Components/about"
import HealthPage from "./Components/health"
import ImplementationPage from "./Components/implementation"
import ContactPage from "./Components/contact"
import Header from "./Components/header"
import { useEffect, useState } from 'react';


export default function Home()
{
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
        if (currentScrollY < lastScrollY - 10) {
          setIsVisible(true);  // Show header when scrolling up by at least 10px
        } else if (currentScrollY > lastScrollY + 10) {
          setIsVisible(false); // Hide header when scrolling down by at least 10px
        }
  
        setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main className="relative">
      {
        lastScrollY > 250 &&
        (<Header visible={`sticky top-0 transition-transform duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isVisible ? 'translate-y-0 bg-[#2b3530] border-b-2 border-b-[#CED1BF] block' : '-translate-y-full border-b-none'}`} />)
      }
      <Video />
      <AboutPage />
      <HealthPage />
      <ImplementationPage />
      <ContactPage />
    </main>
  )
}
