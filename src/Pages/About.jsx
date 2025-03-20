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
            <h2 className="text-3xl font-semibold text-[#2bfff2] my-5">
              Who We Are
            </h2>
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
          </section>
        </div>
      </section>

        {/* Why Choose Us */}
        <section className="my-10 bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mt-2 text-lg">
            We go the extra mile to ensure customer satisfaction by providing
            top-notch services, innovative solutions, and outstanding customer
            support.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="my-10">
          <h2 className="text-4xl font-semibold text-white-800 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1508243529287-e21914733111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                alt="Team Member"
                className="mx-auto"
              />
              <h3 className="text-3xl text-blue-500 font-semibold mt-3">
                John Doe
              </h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="mx-auto"
              />
              <h3 className="text-3xl text-blue-500 font-semibold mt-3">
                Jane Smith
              </h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>

            <div className="text-center bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="mx-auto"
              />
              <h3 className="text-3xl text-blue-500 font-semibold mt-3">
                Robert Brown
              </h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
