import React from "react";

export default function Loader() {
  return (
    <div className="flex w-full min-h-[100vh]  items-center justify-center">
      <img alt="loader" className="w-10" src="/loader.gif" />
    </div>
  );
}
