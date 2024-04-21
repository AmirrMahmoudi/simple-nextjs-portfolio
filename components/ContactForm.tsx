import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="mb-5 text-2xl font-bold text-white"> با من در تماس باش</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="اسم"
          name="name"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="پیام"
          name="message"
          className="w-full rounded border-0 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 shadow"
        />
      </div>

      <button className="mb-10 rounded-3xl bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-all duration-150 ease-linear hover:bg-blue-400">
        ارسال
      </button>
    </form>
  );
};

export default ContactForm;
