'use client';

import { useState } from "react";
import RoutingHeader from "./routeHeader";

export default function Hypercholesterolemia() {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "1",
    hba1c: "",
    TG: "",
    LDL: "",
    HDL: "",
    VLDL: "",
    total_cholestrol: "",
    BMI: "",
    SBP: "",
    DBP: "",
    alcoholic: "0",
    hypertension: "0", 
    diabetes: "0", 
    waist: "",
    family_history: "0", 
    hypercholesterolemia: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedFormData = { ...formData, [name]: value };

    if (["LDL", "HDL", "TG"].includes(name)) {
      const LDL = parseFloat(updatedFormData.LDL) || 0;
      const HDL = parseFloat(updatedFormData.HDL) || 0;
      const TG = parseFloat(updatedFormData.TG) || 0;

      updatedFormData.total_cholestrol = (LDL + HDL + TG / 5).toFixed(0); 
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setFormData((prev) => ({ ...prev, hypercholesterolemia: data.result }));
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <section className="h-auto w-full bg-[#30493D] flex flex-col items-center justify-center pb-[2rem]">
      <RoutingHeader />
      <div className="p-4 bg-[#CED1BF] text-[#30493D] w-[95%] md:w-[80%] rounded-2xl flex flex-col items-center">
        <h2 className="text-[2.5rem] text-center font-bold mb-4">Hypercholesterolemia Prediction</h2>

        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => {
            if (key === "hypercholesterolemia") return null;

            return (
              <div key={key} className="flex flex-col">
                <label className="font-semibold capitalize" htmlFor={key}>
                  {key.replace('_', ' ')}
                </label>

                {/* Gender Dropdown */}
                {key === "Gender" ? (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md bg-[#CED1BF] focus:outline-none"
                  >
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                ) : 
                
                /* Hypertension, Diabetes, Family History, Alcoholic Dropdown */
                ["hypertension", "diabetes", "family_history", "alcoholic"].includes(key) ? (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md bg-[#CED1BF] focus:outline-none"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md bg-[#CED1BF] focus:bg-[#CED1BF] focus:outline-none"
                    required
                  />
                )}
              </div>
            );
          })}

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
