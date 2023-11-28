import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-800">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-white">
            &copy; {new Date().getFullYear()} Monitoring Piutang. All rights
            reserved.
          </div>
          <div className="text-white">
            Created by{" "}
            <a href="https://example.com" className="underline">
              Dhimas Ferdiansyah
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
