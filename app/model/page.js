'use client';

import { useState } from "react";
import RoutingHeader from "./routeHeader";

export default function Hypercholesterolemia() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hba1c: "",
    TG: "",
    HDL: "",
    LDL: "",
    VLDL: "",
    tot_chol: "",
    BMI: "",
    hypertension: "",
    diabetes: "",
    physical_activity: "",
    alcohol: "",
    waist: "",
    smoking: "",
    family_history: "",
    hypercholesterolemia: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prediction logic 
    setFormData((prev) => ({ ...prev, hypercholesterolemia: "Predicted Output" }));
  };

  return (
    <section className="h-auto w-full bg-[#30493D] flex flex-col items-center justify-center pb-[2rem]">
      <RoutingHeader />
      <div className="p-4 bg-[#CED1BF] text-[#30493D] w-[95%] md:w-[80%] rounded-2xl flex flex-col items-center">
        <h2 className="text-[2.5rem] text-center font-bold mb-4">Hypercholesterolemia Prediction</h2>

        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">  
          {Object.keys(formData).map((key) =>  
            key !== "hypercholesterolemia" ? (  
              <div key={key} className="flex flex-col">  
                <label className="font-semibold capitalize" htmlFor={key}>{key.replace('_', ' ')}</label>  
                <input  
                  type="text"  
                  id={key}  
                  name={key}  
                  value={formData[key]}  
                  onChange={handleChange}  
                  className="border border-gray-400 p-2 rounded-md"  
                  required  
                />  
              </div>  
            ) : null  
          )}  

          <div className="w-full flex flex-row justify-center items-center col-span-1 md:col-span-2">  
            <button   
              type="submit"   
              className="!bg-[#30493D] w-full text-[#CED1BF] font-semibold py-2 px-6 rounded-md hover:bg-[#263B2E] transition"  
            >  
              Predict  
            </button>  
          </div>  
        </form>  

        <div className="mt-4 w-full">
          <label className="font-semibold">Hypercholesterolemia:</label>
          <input
            type="text"
            value={formData.hypercholesterolemia}
            readOnly
            className="border border-gray-400 p-2 rounded-md w-full bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
