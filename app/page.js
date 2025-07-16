'use client';

import Video from "./Components/videoLayer"
import AboutPage from "./Components/about"
import HealthPage from "./Components/health"
import ImplementationPage from "./Components/implementation"
import ContactPage from "./Components/contact"
import Header from "./Components/header"
import Footer from "./Components/footer";
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
        (<Header visible={`w-[95%] lg:w-[90%] bg-[#001] mx-auto sticky transition-transform duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isVisible ? 'top-[2%] translate-y-0 border-2 border-[#CED1BF] rounded-[1rem]' : '-translate-y-full top-[-10px] border-b-none'}`} />)
      }
      <Video />
      <AboutPage />
      <HealthPage />
      <ImplementationPage />
      <ContactPage />
      <Footer />
    </main>
  )
}
