import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
function Navbar() {
  return (
    <div className="fixed top-0 z-[40] flex h-[100px] w-full items-center justify-between bg-transparent px-10 md:px-20">
      <div className="flex flex-row items-center gap-3">
        <h1 className="text-[25px] font-semibold text-white">
          Amirhossein
          <span className="ml-3 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Mahmoudi
          </span>
        </h1>
      </div>
      <div className="mb-2 flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
