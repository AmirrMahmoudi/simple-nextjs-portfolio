"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: props) => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setisFlipped(!isFlipped);
      setisAnimating(true);
    }
  }

  return (
    <div
      className="h-[280px] w-[450px] cursor-pointer rounded-md"
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setisAnimating(false)}
      >
        <div
          className="flip-card-front group relative h-full w-full rounded-lg bg-cover bg-center p-4 text-white"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 h-full w-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
        </div>

        <div
          className="flip-card-back group relative h-full w-full rounded-lg bg-cover bg-center p-4 text-white"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-md bg-black opacity-50" />
          <div className="z-[30] flex flex-col gap-20 py-3">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="text-[20px] text-gray-200">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
