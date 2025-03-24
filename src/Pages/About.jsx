import React from "react";
import PageBanner from "../components/PageBanner";

const About = () => {
  return (
    <>
      <PageBanner
        title="ABOUT US"
        breadcrumb="Home / About Us"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="mx-auto p-6">
        <section className="my-10 mx-4 md:mx-15">
          <div className="aboutcontainer flex flex-col md:flex-row justify-start items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHwwfDB8fHww"
              alt="About Us"
              className="rounded-lg shadow-md mt-6 w-full md:w-1/2 h-64 md:h-110 object-cover"
            />
           <section className="max-w-3xl my-10 mx-4 md:mx-15">
            <h2 className="text-4xl font-semibold my-5">Who We Are</h2>
            <div className="border-t border-[#b79141] max-w-2xs w-[150px] py-3"></div>
            <p className="text-white-600 mt-2 text-lg">
              Welcome to Coding With Yash, where innovation meets excellence! 🚀
              We are a team of passionate professionals dedicated to delivering
              cutting-edge solutions that empower businesses and individuals.
              Our journey began with a simple vision: to bridge the gap between
              technology and people by offering high-quality digital solutions.
              Over the years, we have worked with numerous clients, helping them
              turn their ideas into reality. Whether it's web development,
              e-commerce solutions, or custom software, we strive to deliver
              exceptional results with creativity and precision. At Coding With
              Yash,
            </p>
            <p className="text-white-600 mt-10 text-lg">
              we believe that technology should be accessible, user-friendly,
              and impactful. Our commitment to excellence, innovation, and
              customer satisfaction sets us apart. With a strong focus on
              quality and long-term success, we ensure that every project we
              undertake exceeds expectations. Join us on this exciting journey
              and let’s create something extraordinary together!
            </p>
            <button className="bg-[#b79141] text-white mt-5 px-4 py-2 rounded-md hover:bg-[#d0bb74] transition-colors">
              View Our Featured Section
            </button>
          </section>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm text-black/60 mb-2 block">OUR VALUES</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">What drives us forward</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">1</div>
              <h3 className="text-xl font-medium mb-4">Simplicity</h3>
              <p className="text-black/70">
                We believe in the power of simplicity. Our products are designed to be intuitive, functional, and free from unnecessary complexity.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">2</div>
              <h3 className="text-xl font-medium mb-4">Sustainability</h3>
              <p className="text-black/70">
                Each product is crafted with the environment in mind, using sustainable materials and practices that reduce our ecological footprint.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">3</div>
              <h3 className="text-xl font-medium mb-4">Quality</h3>
              <p className="text-black/70">
                We never compromise on quality. Every MINIMØ product is built to last, with meticulous attention to detail and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
      

        {/* Meet the Team */}
        <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm text-black/60 mb-2 block">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">The people behind MINIMØ</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Miyazaki", role: "Founder & Designer", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Camila Patel", role: "Lead Product Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Marcus Chen", role: "Artisan Craftsman", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Lena Kim", role: "Sustainability Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
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
                <p className="text-black/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
