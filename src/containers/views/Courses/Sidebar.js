import React from "react";
import ControlledAccordions from "./sidebarDetails/AccordionView";
import { useReducer, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../layouts/Loading/Loading";

export default function Sidebar() {
  const { error, loading, user } = useSelector((state) => state.auth);

  return (
    <div class="w-3/12 bg-white rounded p-3 shadow-lg">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div class="flex items-center space-x-4 p-2 mb-5">
            <img
              class="h-12 rounded-full"
              src="/assets/images/defaultAvatar.jpeg"
              alt="James Bhatta"
            />
            <div>
              <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                {`${user && user.user.name}`}
              </h4>
              <span class="text-sm tracking-wide flex items-center space-x-1">
                <svg
                  class="h-4 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span class="text-gray-600">Verified</span>
              </span>
            </div>
          </div>

          <ControlledAccordions />
          <div
            style={{ marginTop: "290px" }}
            className="flex justify-around items-center"
          >
            <button
              href="#"
              class="flex items-center mt-screen space-x-3 text-white p-2 rounded-md font-medium hover:bg-red-600 bg-red-500 focus:shadow-outline"
            >
              <span class="text-white">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Logout</span>
            </button>
            <Link
              to="/"
              class="flex items-center mt-screen space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-600 bg-gray-500 focus:shadow-outline"
            >
              <span className="text-white">Home</span>
            </Link>
          </div>
          <Link
            to="/myCourses/course/certificate"
            className="flex mt-10 items-center mt-screen space-x-3 text-white p-2 rounded-md font-medium hover:bg-gray-600 bg-gray-500 focus:shadow-outline"
          >
            Sertifikat Olish
          </Link>
        </div>
      )}
    </div>
  );
}
