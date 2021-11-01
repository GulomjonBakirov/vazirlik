import React from "react";
import Sidebar from "./Sidebar";

export default function Courses({ children }) {
  return (
    <div class="flex flex-wrap bg-gray-100 w-full h-screen">
      <Sidebar />
      <div className="w-9/12">{children}</div>
    </div>
  );
}
