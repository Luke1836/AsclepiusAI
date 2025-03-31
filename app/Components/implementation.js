"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImplementationPage() {
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          { y: "-10%" },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRefs.current[index],
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="w-full bg-[#30493D] overflow-hidden">
      {/* Section 1 */}
      <div
        ref={(el) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="w-full py-16 md:py-24 flex items-center justify-center bg-[#30493D] text-[#CED1BF] origin-bottom p-8"
        style={{ transform: "skewY(6deg)" }}
      >
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden">
          <img
            ref={(el) => {
              if (el) imageRefs.current[0] = el;
            }}
            src="/Data_charts.jpg"
            alt="Data Charts"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 transform -skew-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#CA7D57] shadow-text">
            Data Preprocessing and Feature Engineering
          </h2>
          <p className="text-lg">
            The dataset used for this study was obtained from a standard dataset and consists of multiple patient records containing clinical attributes (16) relevant to hypercholesterolemia prediction. The key steps in data preprocessing included: Handling Missing Values, Feature Selection, Normalization & Standardization, Categorical Encoding, and Train-Test Split.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={(el) => {
          if (el) sectionRefs.current[1] = el;
        }}
        className="w-full py-16 md:py-24 flex items-center justify-center flex-row-reverse text-[#CED1BF] origin-center p-8"
        style={{ transform: "skewY(-6deg)" }}
      >
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden">
          <img
            ref={(el) => {
              if (el) imageRefs.current[1] = el;
            }}
            src="/AI_brain.jpg"
            alt="AI Brain"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 skew-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#CA7D57] shadow-text">
            Machine Learning Models
          </h2>
          <p className="text-lg">
            We experimented with multiple supervised learning models to determine the best algorithm for predicting long-term hypercholesterolemia risk. The models implemented were: Naïve Bayes, K-Nearest Neighbors, Decision Trees, Random Forest, Logistic Regression, Support Vector Machine, and XGBoost.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={(el) => {
          if (el) sectionRefs.current[2] = el;
        }}
        className="w-full py-16 md:py-24 flex items-center justify-center bg-[#30493D] text-[#CED1BF] origin-bottom p-8"
        style={{ transform: "skewY(6deg)" }}
      >
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden">
          <img
            ref={(el) => {
              if (el) imageRefs.current[2] = el;
            }}
            src="/Futuristic.jpg"
            alt="Futuristic"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 -skew-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#CA7D57] shadow-text">
            Framework and Tools
          </h2>
          <p className="text-lg">
            The implementation used Python with Scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn. Development environments included Jupyter Notebook and Google Colab.
          </p>
        </div>
      </div>
    </section>
  );
}
