import Image from "next/image";
import React from "react";

function JoinTaskKar() {
  return (
    <div className="mx-32 my-16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-5xl mb-10">
          With TaskKar everything is <i>achievable.</i>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2 border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Join TaskKar
        </button>
      </div>
      <div className="w-full h-96">
        <Image src="/bg-signup.webp" fill alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinTaskKar;
