import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-4 py-4 pb-40 md:pb-4">
          <label className="text-gray-800">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="p-4 bg-[#F4F7F3] rounded-md"
          />
          <label className="text-gray-800">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="p-4 bg-[#F4F7F3] rounded-md"
          />
          <button className="hover:shadow-md px-16 py-4 bg-gradient-to-r from-[#9FE699] to-[#1EB35A] hover:bg-gradient-to-r hover:from-[#8ece88] hover:to-[#29a55b] font-bold text-xl text-white rounded-full">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
