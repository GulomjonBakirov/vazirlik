import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Navbar/Nav";

export default function Main({ children }) {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      <Footer />
    </div>
  );
}
