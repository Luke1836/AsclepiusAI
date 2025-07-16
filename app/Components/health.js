"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HealthPage()
{
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="health" className="w-full h-svh bg-gradient-to-br from-[#2c7853] via-teal-900 to-[#213229] flex flex-col md:flex-row overflow-hidden gap-8 lg:gap-0">
      <div className="w-full md:w-[50%] h-[5rem] md:h-[100vh] grid place-content-center">
        
      </div>

      <div className='md:w-[60%] w-full h-[90vh] md:h-[100vh] flex flex-col items-center justify-start md:justify-center gap-8'>
        <p ref={(el) => (textRefs.current[0] = el)} className='w-[80%] text-[#CED1BF] text-[1rem] xl:text-[1.5rem]'>
          &nbsp;&nbsp;&nbsp;<span className='text-[#fbf700]'>Hypercholesterolemia</span> commonly referred to as high cholesterol, is a condition in which excess cholesterol circulates in the bloodstream, increasing the risk of heart disease and stroke.
        </p>
        <p ref={(el) => (textRefs.current[1] = el)} className='text-[#CED1BF] w-[80%] text-[1rem] xl:text-[1.5rem] hidden md:block'>
          &nbsp;&nbsp;&nbsp;Several factors contribute to <span className='text-[#fbf700]'>Hypercholesterolemia</span>, some of which are controllable while others are genetic.
        </p>
        <p ref={(el) => (textRefs.current[2] = el)} className='text-[#CED1BF] w-[80%]'>
          &nbsp;&nbsp;&nbsp;<span className='text-[#fbf700]'>Hypercholesterolemia</span> is often called a "silent" condition because it typically does not cause noticeable symptoms until complications arise.
        </p>
        <p ref={(el) => (textRefs.current[3] = el)} className='text-[#CED1BF] w-[80%]'>
          Want to learn more: <Link href='\hypercholesterolemia'><span className='text-[#fbf700]'>Click Here!</span></Link>
        </p>
      </div>
    </section>
  )
}