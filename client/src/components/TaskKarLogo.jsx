import Image from "next/image";
import React from "react";

function TaskKarLogo() {
  return (
    <Image
      src="/TaskKar.svg"
      alt="TaskKar Logo"
      width={100} // Ensure the width is appropriate for the navbar
      height={30} // Ensure the height matches the navbar's design
      layout="fixed" // Prevent it from overflowing the navbar
      priority
    />
  );
}

export default TaskKarLogo;
