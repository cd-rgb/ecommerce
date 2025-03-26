import React from "react";
import PageBanner from "../components/PageBanner";
import CtaSection from "../components/CtaSection";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <>
      <PageBanner
        title="ABOUT US"
        breadcrumb="Home / About Us"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="mx-auto">
        <AboutSection />

        <section className="py-20 px-6 bg-[#b79141]">
          <div className=" mx-auto">
            <span className="text-[#fff]/70 text-lg mb-2 block text-center">
              OUR VALUES
            </span>
            <h2 className="text-5xl font-medium tracking-tight mb-12 text-center">
              What drives us forward
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  1
                </div>
                <h3 className="text-black/70 text-xl font-medium mb-4">
                  Simplicity
                </h3>
                <p className="text-black/70">
                  We believe in the power of simplicity. Our products are
                  designed to be intuitive, functional, and free from
                  unnecessary complexity.
                </p>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  2
                </div>
                <h3 className="text-xl text-black/70 font-medium mb-4">
                  Sustainability
                </h3>
                <p className="text-black/70">
                  Each product is crafted with the environment in mind, using
                  sustainable materials and practices that reduce our ecological
                  footprint.
                </p>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  3
                </div>
                <h3 className="text-xl text-black/70 font-medium mb-4">
                  Quality
                </h3>
                <p className="text-black/70">
                  We never compromise on quality. Every MINIMØ product is built
                  to last, with meticulous attention to detail and
                  craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        
        <section className="py-15 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-lg text-[#fff]/60 mb-2 block text-center">
              OUR TEAM
            </span>
            <h2 className="text-5xl font-medium tracking-tight mb-12 text-center">
              The people behind Coding With Yash 
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Miyazaki",
                  role: "Founder & Designer",
                  image:
                    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Camila Patel",
                  role: "Lead Product Designer",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Marcus Chen",
                  role: "Artisan Craftsman",
                  image:
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Lena Kim",
                  role: "Sustainability Lead",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-[200px]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-[#fff]/60">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaSection />
      </div>
    </>
  );
};

export default About;
