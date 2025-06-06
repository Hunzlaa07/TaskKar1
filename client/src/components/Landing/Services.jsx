import { categories } from "../../utils/categories"; // Make sure categories are updated
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Services() {
  const router = useRouter();

  return (
    <div className="mx-20 my-16 ">
      <h2 className="text-4xl mb-10 text-[#2d7a34] font-bold ">
        Explore TaskKar Services
      </h2>
      <ul className="grid grid-cols-5 gap-10">
        {categories.map(({ name, logo }) => {
          return (
            <li
              key={name}
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:border-[#1DBF73]  border-2 border-transparent p-5 transition-all duration-500"
              onClick={() => router.push(`/search?category=${name}`)}
            >
              <Image src={logo} alt={`${name} category`} height={50} width={50} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Services;
