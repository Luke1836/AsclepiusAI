"use client";

import { useRef, useEffect } from "react";

export default function ImplementationPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full z-100 ">
      {/* Section 1 */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="w-full py-16 md:py-24 transition-opacity duration-500 opacity-0 transform translate-y-20 flex items-center justify-center"
      >
        <div
          className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/Data_charts.jpg')" }}
        >
          <div
            className="absolute inset-0 bg-black opacity-30 skew-y-6 md:skew-y-12 transform origin-bottom-left"
            style={{ transform: "skewY(-12deg) translateX(10%)" }}
          ></div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Data Preprocessing and Feature Engineering
          </h2>
          <p className="text-lg">
            The dataset used for this study was obtained from a standard dataset and consists of multiple patient records containing clinical attributes (16) relevant to hypercholesterolemia prediction. The key steps in data preprocessing included: Handling Missing Values, Feature Selection, Normalization & Standardization, Categorical Encoding, and Train-Test Split.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="w-full py-16 md:py-24 transition-opacity duration-500 opacity-0 transform translate-y-20 flex items-center justify-center flex-row-reverse"
      >
        <div
          className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/AI_brain.jpg')" }}
        >
          <div
            className="absolute inset-0 bg-black opacity-30 skew-y-6 md:skew-y-12 transform origin-bottom-left"
            style={{ transform: "skewY(12deg) translateX(-10%)" }}
          ></div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Machine Learning Models
          </h2>
          <p className="text-lg">
            We experimented with multiple supervised learning models to determine the best algorithm for predicting long-term hypercholesterolemia risk. The models implemented were: Naïve Bayes, K-Nearest Neighbors, Decision Trees, Random Forest, Logistic Regression, Support Vector Machine, and XGBoost.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="w-full py-16 md:py-24 transition-opacity duration-500 opacity-0 transform translate-y-20 flex items-center justify-center"
      >
        <div
          className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/Futuristic.jpg')" }}
        >
          <div
            className="absolute inset-0 bg-black opacity-30 skew-y-6 md:skew-y-12 transform origin-bottom-left"
            style={{ transform: "skewY(-12deg) translateX(10%)" }}
          ></div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
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