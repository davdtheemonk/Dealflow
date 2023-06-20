import React from "react";
export default function Header() {
  return (
    <nav className="layout w-full bg-white absolute top-0 left-0 flex justify-start  py-8  sm:py-4 items-center font-bold shadow-sm ">
      <div className="w-10">
        <img src="/dealflow.webp" alt="logo" className="w-40" />
      </div>
    </nav>
  );
}
