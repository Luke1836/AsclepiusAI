"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", country: "", comments: "" });
    } else {
      alert("Error submitting form.");
    }
  };

  return (
    <section className="w-full h-screen flex" id="contact">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 text-[#30493D] bg-[#CED1BF]">
        <h2 className="text-3xl font-bold mb-4 text-center">Connect with AsclepiusAI</h2>
        <p className="mb-6 text-center">
          Have questions or want to be part of AsclepiusAI? Fill out the form below, and we’ll get back to you soon. Let’s shape the future of AI-driven healthcare together!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input type="text" name="name" placeholder="Name" required className="w-full p-3 mb-3 border" onChange={handleChange} value={formData.name} />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 mb-3 border" onChange={handleChange} value={formData.email} />
          <input type="text" name="phone" placeholder="Phone" required className="w-full p-3 mb-3 border" onChange={handleChange} value={formData.phone} />
          <input type="text" name="country" placeholder="Country" required className="w-full p-3 mb-3 border" onChange={handleChange} value={formData.country} />
          <textarea name="comments" placeholder="Comments" required className="w-full p-3 mb-3 border" onChange={handleChange} value={formData.comments}></textarea>
          <button className="w-full !bg-[#30493D] text-[#CED1BF] py-3 px-6 mt-3 rounded">
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Parallax Image */}
      <div 
        className="hidden md:block md:w-1/2 h-full bg-fixed bg-center" 
        style={{ backgroundImage: "url('/Photos-mini-project-1.jpg')", backgroundSize: "100%", backgroundPosition: "center" }}
      ></div>

    </section>
  );
}
