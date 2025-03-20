import React from "react";
import { Truck, Headset, CreditCard, Trophy } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Truck size={30} />,
      title: "FREE DELIVERY",
      subtitle: "WORLDWIDE",
    },
    {
      icon: <Headset size={30} />,
      title: "24/7 SUPPORT",
      subtitle: "CUSTOMER SUPPORT",
    },
    {
      icon: <CreditCard size={30} />,
      title: "PAYMENT",
      subtitle: "SECURE SYSTEM",
    },
    {
      icon: <Trophy size={30} />,
      title: "TRUSTED",
      subtitle: "GENUINE PRODUCTS",
    },
  ];

  return (
    <div className="flex justify-around items-center p-10 bg-[#F5F5F5] flex-wrap">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-full sm:w-40 md:w-52 m-2"
        >
          <div className="text-3xl text-[#1E3A8A] mb-2">{feature.icon}</div>
          <h3 className="text-base font-bold text-[#2D3748] mb-1">
            {feature.title}
          </h3>
          <p className="text-xs text-[#4A5568]">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
