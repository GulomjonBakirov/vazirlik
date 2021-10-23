import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div className="flex justify-center flex-col text-center h-screen ">
        <h3 className="text-red-700  text-lg lg:text-5xl">
          404 page not found
        </h3>
        <Link to="/">click here to go home</Link>
      </div>
    </div>
  );
}
