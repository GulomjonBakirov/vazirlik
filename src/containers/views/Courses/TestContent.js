import { message } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function TestContent() {
  const test = useRef();
  const test2 = useRef();
  const test3 = useRef();
  const test4 = useRef();
  const checkTest = (e) => {
    e.preventDefault();
    const answer = e.target.innerHTML.split(" ").slice(1).join(" ");
    if (answer === "docs") {
      message.success("Javobingiz To'g'ri", 0.5);
      test2.current.classList.remove("hidden");
      test.current.classList.add("hidden");
    } else {
      message.error("Javobingiz Xato qayta urinib koring", 0.5);
    }
  };
  return (
    <div>
      <div
        className="mt-6 ml-6 shadow-xl  p-5 rounded border-2  text-center m-auto"
        style={{ width: "50rem" }}
        ref={test}
      >
        <h1>Excel Nima ish bajaradi</h1>
        <div className="flex items-center justify-between ">
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            A) docs
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            B) exe
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            C) yarn
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            D) npm
          </button>
        </div>
      </div>
      <div
        className="mt-6 ml-6 shadow-xl  p-5 rounded border-2 hidden text-center m-auto"
        style={{ width: "50rem" }}
        ref={test2}
      >
        <h1>Document Nima </h1>
        <div className="flex items-center justify-between ">
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            A) html code
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            B) css
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            C) block
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            D) davo
          </button>
        </div>
      </div>

      <div
        className="mt-6 ml-6 shadow-xl  p-5 rounded border-2 hidden text-center m-auto"
        style={{ width: "50rem" }}
        ref={test3}
      >
        <h1>My Computer</h1>
        <div className="flex items-center justify-between ">
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            A) lorem
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            B) epsum
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            C) dollar
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            D) npm
          </button>
        </div>
      </div>
      <div
        className="mt-6 ml-6 shadow-xl  p-5 rounded border-2 hidden  text-center m-auto"
        style={{ width: "50rem" }}
        ref={test4}
      >
        <h1>HAyot</h1>
        <div className="flex items-center justify-between ">
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            A) docs
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            B) exe
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            C) yarn
          </button>
          <button
            className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
            onClick={(e) => checkTest(e)}
          >
            D) npm
          </button>
        </div>
      </div>
    </div>
  );
}
