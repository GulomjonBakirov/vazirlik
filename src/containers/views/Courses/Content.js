import { message } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export default function Content() {
  const [duration, setDuration] = useState("");
  const test = useRef();
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.dir(test.current.classList.add("block"));
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const afterVideo = () => {
    const testingContent = test.current.classList;
    testingContent.remove("hidden");
    testingContent.add("block");
  };

  const checkTest = (e) => {
    e.preventDefault();
    const answer = e.target.innerHTML.split(" ").slice(1).join(" ");
    console.log(answer);
    answer === "docs"
      ? message.success("Javobingiz To'g'ri", 0.5)
      : message.error("Javobingiz Xato qayta urinib koring", 0.5);
  };
  return (
    <div className="p-4 mt-6 text-gray-500">
      <h1 className="text-center text-green-500 text-5xl">Excel Haqida</h1>
      {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ujj_zLZfvYo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      <div className="flex justify-center">
        <YouTube
          videoId="ujj_zLZfvYo"
          opts={opts}
          onEnd={() => afterVideo()}
          // onReady={(e) => _onReady(e)}
          onStateChange={(e) => setDuration(e.target.getDuration())}
        />
      </div>
      <div
        className="mt-6 ml-6 shadow-xl  p-5 rounded border-2 hidden text-center m-auto"
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
        className="flex mt-6 ml-6 justify-between"
        style={{ width: "50rem" }}
      >
        <Link
          to="/myCourses/course/0"
          className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
        >
          oldingisi
        </Link>
        <Link
          to="/myCourses/course/2"
          className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-center py-2 px-4 rounded"
        >
          Keyingisi
        </Link>
      </div>
    </div>
  );
}
