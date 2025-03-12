"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const componentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (componentRef.current && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: "-10%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top bottom",
            end: "bottom top",   
            scrub: 1,               
          },
        }
      );
    }
  }, []);


  return (
    <section id="about" className="w-full h-[200vh] bg-[#2b3530]">
      <div className="w-full h-[100vh] flex flex-col lg:flex-row items-center gap-1">
        <div className="text-[1rem] md:text-[2rem] text-[#CED1BF] w-[90%] lg:w-[35%] text-center p-4 autoShow">
          Welcome to <span className='text-[#CA7D57]'>AsclepiusAI</span> – The Future of Predictive Healthcare
        </div>
        <div className="w-[90vw] lg:w-[55vw] h-[100vh] grid place-content-center">  
          <div className="section-1" ref={componentRef} >  
            <div className="parallax-image" />  
          </div>  
        </div>  
      </div>

      <div className="w-full h-[100vh] flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[35%] h-[5rem] md:h-[100vh]  grid place-content-center">
          <p className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={ faBars } size="2xl" className="text-[#CED1BF] translate-y-1 hidden md:block" />
            <span className="text-[#CED1BF] capitalize text-[3rem]">Introduction</span>
          </p>
        </div>

        <div className='md:w-[75%] w-full h-[90vh] md:h-[100vh] flex flex-col items-center justify-start md:justify-center gap-8'>
          <p className='w-[80%] text-[#CED1BF] text-[1rem] lg:text-[1.5rem] autoShow'>
            &nbsp;&nbsp;&nbsp;Step into a new era of medical intelligence with <span className='text-[#CA7D57]'>AsclepiusAI</span>, where cutting-edge artificial intelligence meets the precision of modern medicine. Designed to revolutionize long-term hypercholesterolemia prediction, <span className='text-[#CA7D57]'>AsclepiusAI</span> empowers healthcare professionals and individuals alike with unparalleled insights into cardiovascular health.
          </p>
          <p className='text-[#CED1BF] w-[80%] text-[1rem] lg:text-[1.5rem] hidden md:block autoShow'>
            &nbsp;&nbsp;&nbsp;Harnessing the power of advanced machine learning, predictive analytics, and biomedical intelligence, AsclepiusAI meticulously evaluates risk factors, genetic predispositions, and lifestyle influences to provide personalized, proactive health forecasts.
          </p>
          <p className='text-[#CED1BF] w-[80%] autoShow'>
            &nbsp;&nbsp;&nbsp;At AsclepiusAI, we don’t just predict—we prevent. Our mission is to equip individuals with the knowledge to make informed decisions, enabling a future where cardiovascular diseases are mitigated before they arise.
          </p>
          <p className='text-[#CED1BF] w-[80%] autoShow'>
            🔬 Precision. Prevention. Progress. Welcome to the next frontier in AI-driven healthcare. 
          </p>
        </div>
      </div>
    </section>
  )
}