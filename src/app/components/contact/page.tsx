'use client'

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    details: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    details: "",
  });

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;
    const mobilePattern = /^\d{11}$/;

    const newErrors = {
      name: formData.name
        ? namePattern.test(formData.name)
          ? ""
          : "Only alphabets allowed in Full Name"
        : "Full Name is required",

      email: formData.email
        ? validateEmail(formData.email)
          ? ""
          : "Email format is invalid"
        : "Email is required",

      mobile: formData.mobile
        ? mobilePattern.test(formData.mobile)
          ? ""
          : "Mobile number must be 11 digits"
        : "Mobile number is required",

      details: formData.details ? "" : "Project details are required",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");

    if (!hasError) {
      emailjs.send(
       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string ,
       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.details,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", mobile: "", details: "" });
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        setSuccessMessage("Something went wrong. Please try again.");
      });
    }
  };

  return (
    <section id='contact' className="min-h-screen bg-[#141414] text-white px-6 sm:px-10 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-[25px] md:text-4xl lg:text-5xl font-semibold">let’s do something awesome</h2>

          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl">Address</h4>
                <p className="text-gray-300 text-sm sm:text-base">Karachi, Pakistan.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1" />
              <div>
                <h4 className="font-semibold text-lg sm:text-xl">Phone & Email</h4>
                <p className="text-gray-300 text-sm sm:text-base">(+92) 330-5498438</p>
               <p>
                <a 
                href="mailto:alishbanaveeddev@gmail.com"
                className="text-gray-300 text-sm sm:text-base hover:underline"
                >
                   AlishbaNaveedDev@gmail.com
                  </a>
                  </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-green-400 pt-10 hidden lg:block">
            Copyright © {new Date().getFullYear()} User. All rights reserved.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-lg sm:text-xl font-semibold">Hey, how about we have a chat?</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              className={`xl:w-[70%] lg:w-[80%] md:w-[50%] w-full md:block px-4 py-3 rounded-md bg-transparent border  ${
                errors.name ? "border-red-500" : "border-white/50"
              } text-white`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className={`xl:w-[70%] lg:w-[80%] md:w-[50%] w-full md:block px-4 py-3 rounded-md bg-transparent border ${
                errors.email ? "border-red-500" : "border-white/50"
              } text-white`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile*"
              value={formData.mobile}
              onChange={handleChange}
              className={`xl:w-[70%] lg:w-[80%]  md:w-[50%] w-full md:block px-4 py-3 rounded-md bg-transparent border ${
                errors.mobile ? "border-red-500" : "border-white/50"
              } text-white`}
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

            <textarea
              name="details"
              rows={5}
              placeholder="Write Project Details*"
              value={formData.details}
              onChange={handleChange}
              className={`xl:w-[70%] lg:w-[80%] md:w-[50%] w-full md:block px-4 py-3 rounded-md bg-transparent border ${
                errors.details ? "border-red-500" : "border-white/50"
              } text-white resize-none`}
            ></textarea>
            {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}

            <button
              type="submit"
              className="xl:w-[70%] lg:w-[80%] md:w-[50%] w-full md:block py-3 bg-green-400 text-black font-semibold rounded-md hover:bg-green-500 transition duration-300"
            >
              Send Message
            </button>

            {successMessage && <p className="text-green-400 text-md font-medium">{successMessage}</p>}
          </form>

        </div>
        <p className="text-sm text-green-400 pt-6 lg:hidden">
            Copyright © {new Date().getFullYear()} User. All rights reserved.
          </p>
      </div>
    </section>
  );
}
