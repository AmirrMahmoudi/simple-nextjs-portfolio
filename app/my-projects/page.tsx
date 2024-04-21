import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover"
      style={{ backgroundImage: "url(/mountains.jpg)" }}
    >
      <div className="grid max-h-[90%] max-w-[90%] grid-cols-2 gap-5 max-md:mt-40 max-md:grid-cols-1">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
