import ContactForm from "@/components/ContactForm";
import { url } from "inspector";
import React from "react";

const page = () => {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
    >
      <div
        className="relative h-[60%] w-[80%] rounded-xl border border-white bg-cover bg-center"
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
      >
        <div className="absolute bottom-16 left-20 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
