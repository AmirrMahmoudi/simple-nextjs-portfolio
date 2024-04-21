"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:test@example.com?subject=Contact&body=${formState.message}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-5 text-2xl font-bold text-white"> با من در تماس باش</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="اسم"
          name="name"
          onChange={handleChange}
          value={formState.name}
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          onChange={handleChange}
          value={formState.email}
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="پیام"
          name="message"
          onChange={handleChange}
          value={formState.message}
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>

      <button
        type="submit"
        className="mb-10 rounded-3xl bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-all duration-150 ease-linear hover:bg-blue-400"
      >
        ارسال
      </button>
    </form>
  );
};

export default ContactForm;
