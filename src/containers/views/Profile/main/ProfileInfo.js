import React from "react";
import avatarImage from "./Image.jpeg";

export default function ProfileInfo({ userInfo }) {
  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <img className="h-auto w-full mx-auto" src={avatarImage} alt="" />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {userInfo && userInfo.name}
      </h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        <span className="text-yellow-500">Bo'linma: </span>
        {userInfo && userInfo.Division}
      </h3>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        <span className="text-yellow-500">Lavozim: </span>
        {userInfo && userInfo.Position}
      </h3>

      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
              O'qimoqda
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Azolik</span>
          <span className="ml-auto">{userInfo && userInfo.Date}</span>
        </li>
      </ul>
    </div>
  );
}
