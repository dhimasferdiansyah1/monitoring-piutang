import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-between items-center">
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
