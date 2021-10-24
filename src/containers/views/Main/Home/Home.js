import React from "react";

import "./style.css";
import InnerHome from "./InnerHome";
import Features from "./Features";

export default function Home() {
  return (
    <div className="Home">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InnerHome />
        <Features />
      </div>
    </div>
  );
}
