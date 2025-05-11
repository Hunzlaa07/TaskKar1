import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    { name: "House Cleaning", label: "Keep your home spotless", image: "/service1.png" },
    { name: "Gardening", label: "Transform your garden", image: "/service2.jpeg" },
    {
      name: "Plumbing",
      label: "Fix your leaks",
      image: "/service3.jpeg",
    },
    {
      name: "Electrical Services",
      label: "Ensure your safety",
      image: "/service4.jpeg",
    },
    {
      name: "Moving Services",
      label: "Stress-free relocations",
      image: "/service5.jpeg",
    },
    { name: "Personal Assistant", label: "Help with daily tasks", image: "/service6.jpeg" },
    {
      name: "Cooking Services",
      label: "Delicious meals at home",
      image: "/service7.jpeg",
    },
    { name: "Childcare", label: "Safe and reliable care", image: "/service8.jpeg" },
  ];

  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#2d7a34] font-bold">
        Popular Services
      </h2>
      <ul className="flex flex-wrap gap-16">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-black left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72 ">
                <Image src={image} fill alt="service" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
