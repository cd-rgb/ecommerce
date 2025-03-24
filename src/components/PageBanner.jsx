import React from "react";

const PageBanner = ({ title, breadcrumb }) => {
  const backgroundImage = "/2.webp";

  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#b79141]/90"></div>

      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageBanner;
