"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ImplementationPage() 
{
  gsap.registerPlugin(ScrollTrigger);

  const data = [
    {
      image: "/Data_charts.jpg",
      title: "Data Preprocessing and Feature Engineering",
      description:
        "The dataset used for this study was obtained from a standard dataset and consists of multiple patient records containing clinical attributes (16) relevant to hypercholesterolemia prediction. The key steps in data preprocessing included: Handling Missing Values, Feature Selection, Normalization & Standardization, Categorical Encoding, and Train-Test Split.",
    },
    {
      image: "/AI_brain.jpg",
      title: "Machine Learning Models",
      description:
        "We experimented with multiple supervised learning models to determine the best algorithm for predicting long-term hypercholesterolemia risk. The models implemented were: Naïve Bayes, K-Nearest Neighbors, Decision Trees, Random Forest, Logistic Regression, Support Vector Machine, and XGBoost.",
    },
    {
      image: "/Futuristic.jpg",
      title: "Framework and Tools",
      description:
        "The implementation used Python with Scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn. Development environments included Jupyter Notebook and Google Colab.",
    },
  ];

  const sectionRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      let sections = gsap.utils.toArray(".slide");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=" + window.innerHeight * (sections.length - 1),
          pin: true,
          scrub: 0.5,
          snap: { snapTo: 1 / (sections.length - 1), duration: 0.5, ease: "power3.out" },
          anticipatePin: 0.5,
        },
      });
  
      sections.forEach((section, index) => {
        if (index > 0) {
          tl.to(section, { opacity: 1, duration: 0.8, ease: "power3.out" }, index);
        }
      });
  
      return () => tl.kill();
    });
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section id="implementation" ref={sectionRef} className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#2b3530]">
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className={`slide absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-700 ${
            index === 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="bg-[#CED1BF] text-[#2b3530] w-[85vw] md:w-[40vw] h-[98vh] flex flex-col justify-center items-center p-8 rounded-lg shadow-2xl">
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4 text-center">{item.title}</h2>
            <img src={item.image} alt={item.title} className="w-3/4 h-1/2 rounded-lg shadow-lg mb-4" />
            <p className="text-center text-[1rem] px-4">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
