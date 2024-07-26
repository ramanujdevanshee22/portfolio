'use client'
import { useState } from "react";
import Image from "next/image";
import Mail from "../../../../public/mail.png";

const ContactmePage = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch('/api/EmailService', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
      
      } else {
        setError("Failed to send your message. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:w-[30%] sm:top-0 relative -top-16 bg-orange-100 flex justify-center">
        <Image
          priority
          src={Mail}
          alt="Background Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[70%] flex flex-col items-center pl-[6rem] sm:pl-6">
        <div className="sm:text-5xl text-xl underline underline-offset-4 font-semibold font-poppins mt-14 mb-5 text-amber-600">
          Reach me out!
        </div>
        <div className="mt-9 w-64 bg-orange-500 border p-4 shadow-md shadow-slate-600 rounded-lg ml-8 hover:transform hover:scale-105 transition-all duration-500 ease-in-out bg-opacity-10 flex flex-col sm:w-[64%] justify-center gap-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center py-2 gap-12">
              <input
                id="form-name"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                maxLength={50}
                className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                required
                placeholder="Name"
              />
              <input
                id="form-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                maxLength={80}
                type="email"
                className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                placeholder="Email"
              />
              <input
                id="form-phone"
                name="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoComplete="tel"
                maxLength={20}
                type="tel"
                className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                placeholder="Phone Number"
              />
              <textarea
                id="form-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows={2}
                className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                required
                placeholder="Message"
              />
              <button
                className="rounded-lg py-2 px-5 text border-2 bg-orange-400"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactmePage;
