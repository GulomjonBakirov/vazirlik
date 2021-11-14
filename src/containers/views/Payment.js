import React from "react";
import { useState } from "react";
import paymentImage from "./defaultPayment.jpeg";

export default function Payment() {
  const [image, setImage] = useState(paymentImage);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  console.log(image);

  return (
    <div className="py-20  bg-white px-2">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="Avatar Preview"
            style={{ width: "800px", height: "250px", objectFit: "center" }}
          />
        </div>
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
              <div className="absolute">
                <div className="flex flex-col items-center">
                  <i className="fa fa-folder-open fa-4x text-blue-700"></i>{" "}
                  <span className="block text-gray-400 font-normal">
                    Attach you files here
                  </span>{" "}
                </div>
              </div>{" "}
              <input
                type="file"
                className="h-full w-full opacity-0"
                name=""
                onChange={imageHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
