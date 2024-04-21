"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [pervPath, setPervPath] = useState("/");

  useEffect(() => {
    if (pervPath !== path) {
      setIsRouting(true);
    }
  }, [path, pervPath]);

  useEffect(() => {
    if (isRouting) {
      setPervPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="absolute -bottom-20 left-[20%] z-[50] flex max-h-[150px] w-[50%] items-center justify-between rounded-full border border-white bg-black px-4 py-7 md:w-[20%]">
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 min-w-[20%] pl-4">
          <nav.icon
            className={`h-[24px] w-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
