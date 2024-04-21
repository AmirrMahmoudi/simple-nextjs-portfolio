"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SkillData } from "@/constants";
import Image from "next/image";
import "swiper/css";
const page = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="flex max-w-[80%] flex-col items-center gap-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[50px] font-semibold text-white">
            حرفه و تکنولوژی ها
          </h1>
          <p className="text-[20px] text-gray-400">تجربه کا با آخرین ورژن</p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                height={skill.height}
                width={skill.width}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                height={skill.height}
                width={skill.width}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
