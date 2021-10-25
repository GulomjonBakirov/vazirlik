import React from "react";
import backgroundCourse from "./bg.jpeg";
import avatarFemale from "./avatarFemale.jpeg";
import { Link } from "react-router-dom";

const style = {
  backgroundImage: `url(${backgroundCourse})`,
};

export default function Courses({ userInfo }) {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <h1 className="text-center text-green-600 text-3xl">Mening Kurslarim</h1>
      <div className="p-10">
        {/* <!--Card 1--> */}
        {userInfo &&
          userInfo.Courses.map((d, index) => (
            <div key={index} className="mt-2 w-full lg:max-w-full lg:flex">
              <div
                className="h-30 lg:h-50 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                title="Course"
                style={{ backgroundImage: `url(${backgroundCourse})` }}
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {d}
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>

                <div className="mt-4">
                  <Link
                    to="/myCourses/course/1"
                    className="bg-green-500 hover:bg-green-700 hover:text-white text-white text-center py-2 px-4 rounded "
                  >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
