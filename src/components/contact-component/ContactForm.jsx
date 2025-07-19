"use client";
import { useRef, useState } from "react";
import { sendContactForm } from "@/lib/email/sendContactForm";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    try {
      await sendContactForm(form.current);
      setSuccess(true);
      form.current.reset();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
    >
      <span>Dear Abdullah Ansari,</span>
      <textarea
        rows={6}
        name="user_message"
        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
      />
      <span>My mail address is:</span>
      <input
        name="user_email"
        type="text"
        className="bg-transparent border-b-2 border-b-black outline-none"
      />
      <span>Regards</span>
      <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
        Send
      </button>
      {success && (
        <span className="text-green-600 font-semibold">
          Your message has been sent successfully!
        </span>
      )}
      {error && (
        <span className="text-red-600 font-semibold">
          Something went wrong!
        </span>
      )}
    </form>
  );
};

export default ContactForm;
