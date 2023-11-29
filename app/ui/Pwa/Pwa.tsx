"use client";
import { useState, useEffect } from "react";
import { ArrowDownOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Pwa = () => {
  const [showIcon, setShowIcon] = useState(true);

  const handleIconClick = () => {
    setShowIcon(false);
  };

  return (
    <>
      {showIcon && (
        <div className="w-full flex justify-between items-center p-2 border bg-[#FFF3CD] border-[#ffeeba] md:hidden rounded-[0.25rem] mb-4">
          <div className="text-sm text-[#856404]">
            Install dalam bentuk aplikasi, klik tombol install biru
            <button className="inline-flex items-center font-bold text-blue-700">
              &nbsp; Install <ArrowDownOnSquareIcon width={15} height={15} />
            </button>
          </div>
          <div className="px-2 text-[#856404]">
            <XMarkIcon width={20} height={20} onClick={handleIconClick} />
          </div>
        </div>
      )}
    </>
  );
};

export default Pwa;
