"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect, useState } from "react";

export default function AboutPage()
{
  const componentRef = useRef(null);  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 } // Component is considered visible when at least 10% of it is on screen
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Sync scroll only when visible

    const syncScroll = () => {
      const scrollY = window.scrollY;
      if (componentRef.current) {
        componentRef.current.scrollTop = 0.35 * scrollY;
      }
    };

    window.addEventListener("scroll", syncScroll);
    return () => {
      window.removeEventListener("scroll", syncScroll);
    };
  }, [isVisible]); // Runs whenever `isVisible` changes


  return (
    <section id="about" className="w-full h-[200vh] bg-[#2b3530]">
      <div className="w-full h-[100vh] flex flex-col lg:flex-row items-center gap-1">
        <div className="text-[1rem] md:text-[2rem] text-[#CED1BF] capitalize w-[90%] lg:w-[35%] text-center p-4 grid place-content-center">
          Welcome to AsclepiusAI – The Future of Predictive Healthcare
        </div>
        <div className="w-[90vw] lg:w-[55vw] h-[100vh] grid place-content-center">  
          <div className="section-1" ref={componentRef} >  
            <div className="parallax-image" />  
          </div>  
        </div>  
      </div>

      <div className="w-full h-[100vh]">
        <div className="w-[35%] h-[100vh] grid place-content-center">
          <p className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={ faBars } size="2xl" className="text-[#CED1BF] translate-y-1" />
            <span className="text-[#CED1BF] capitalize text-[3rem]">Introduction</span>
          </p>
          
        </div>
      </div>
    </section>
  )
}