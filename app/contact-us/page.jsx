"use client";
import React, { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Contact submitted successfully!");
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        }); // Clear form after successful submission
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error submitting the contact form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center">
          We&apos;d love to hear from you! Fill out the form below to get in
          touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 mt-4"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="bg-white rounded-lg shadow-lg p-6 ">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            About Me
          </h2>
          <div className="text-gray-600">
            <p className="mb-6 text-center">My contact and social media .</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/PankajKrishnaVanshaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/pankajkrishnavanshaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
