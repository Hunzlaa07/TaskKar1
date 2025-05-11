import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import TaskKarLogo from "../TaskKarLogo"; // Assuming you have a new logo for TaskKar

function TaskKarBusiness() {
  return (
    <div className="bg-[#4d084b] px-20 py-16 flex gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-2">
          <TaskKarLogo fillColor={"#ffffff"} /> 
          <span className="text-white text-3xl font-bold">TaskKar for Business</span>
        </div>
        <h2 className="text-3xl font-bold">A platform built for outsourcing</h2>
        <h4 className="text-xl">
          Upgrade to access vetted professionals and exclusive tools for your tasks
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Curated talent matching</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Dedicated account managers</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Task collaboration tools</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Custom payment solutions</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-5 py-2 border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Explore TaskKar Business
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image src="/business.webp" alt="taskkar business" fill /> 
      </div>
    </div>
  );
}

export default TaskKarBusiness;
