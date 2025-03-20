import React from "react";

const PageBanner = ({ title, breadcrumb,}) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
 
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageBanner;
