import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Icons from lucide-react

const ContactForm = () => {
  return (
    <>
      <div className="p-6 ">
        {/* Page Title */}
        <h1 className="text-3xl font-bold  mb-8 text-center">
          Get In Touch With Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Mail className="text-[#1E3A8A] mb-4" size={30} />
            <h3 className="text-lg font-semibold text-[#2D3748] mb-2">Email</h3>
            <p className="text-[#4A5568]">
              <a
                href="mailto:support@eshop.com"
                className="hover:text-[#1E3A8A] transition-colors"
              >
                support@eshop.com
              </a>
            </p>
          </div>

          {/* Phone Numbers Column */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="text-[#1E3A8A] mb-4" size={30} />
            <h3 className="text-lg font-semibold text-[#2D3748] mb-2">
              Phone Numbers
            </h3>
            <p className="text-[#4A5568]">
              <a
                href="tel:+11234567890"
                className="hover:text-[#1E3A8A] transition-colors"
              >
                +1-123-456-7890
              </a>
            </p>
            <p className="text-[#4A5568] mt-1">
              <a
                href="tel:+10987654321"
                className="hover:text-[#1E3A8A] transition-colors"
              >
                +1-098-765-4321
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="text-[#1E3A8A] mb-4" size={30} />
            <h3 className="text-lg font-semibold text-[#2D3748] mb-2">
              Address
            </h3>
            <p className="text-[#4A5568]">
              123 E-Shop Street, <br />
              Suite 456, <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Column */}
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241264871597!2d-73.98823458459392!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a4051f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form Column */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2D3748] mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#4A5568] mb-1 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#4A5568] mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[#4A5568] mb-1 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E3A8A] text-white p-3 rounded-md hover:bg-[#2B4A9B] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
