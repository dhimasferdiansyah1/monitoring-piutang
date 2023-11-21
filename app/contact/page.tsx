import React from "react";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="container flex min-h-screen justify-center mx-auto px-4 lg:px-0">
        <form className="w-96">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-600 mt-2">
              Fill out the form below to contact us
            </p>
          </div>
          <div className="flex flex-col gap-4 py-4 pb-40 md:pb-4">
            <label className="text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="p-4 bg-[#F4F7F3] rounded-md"
            />
            <label className="text-gray-800">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="p-4 bg-[#F4F7F3] rounded-md"
            />
            <label className="text-gray-800">Message</label>
            <textarea
              placeholder="Message"
              className="p-4 bg-[#F4F7F3] rounded-md"
            />
            <button className="hover:shadow-md px-16 py-4 bg-gradient-to-r from-[#9FE699] to-[#1EB35A] hover:bg-gradient-to-r hover:from-[#8ece88] hover:to-[#29a55b] font-bold text-xl text-white rounded-full">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
