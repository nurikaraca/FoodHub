"use client"
import { Button, Input } from "@heroui/react";

import { FaLocationDot } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center  text-center "
      style={{ backgroundImage: "url('hero4.jpg')" }}
    >
      <div className="w-[60rem]   flex flex-row  flex-wrap gap-4 items-center justify-center translate-y-[150px] md:translate-y-[320px] ">
        <Input

          className=" w-full sm:w-[400px] md:w-[500px] lg:w-[520px] mx-2"
          classNames={{
            inputWrapper: "h-[50px] md:h-[80px]",
            input: "text-2xl p-8 "
          }}
          placeholder="Enter delivery address"
          type="text"

          startContent={
            <FaLocationDot className="text-2xl text-default-900 pointer-events-none flex-shrink-0" />
          }
        />

        <Button radius="md" className="w-full sm:w-[200px] md:w-[250px] lg:w-[320px] mx-2 h-[50px] md:h-[80px] text-2xl p-5  bg-black text-white">Search here</Button>

      </div>
    </div>
  );
}

export default Hero;
