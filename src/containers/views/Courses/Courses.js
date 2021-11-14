import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { loadUser } from "../../../actions/userActions";

export default function Courses({ children }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("salom");
  //   dispatch(loadUser());
  // }, []);

  return (
    <div class="flex flex-wrap bg-gray-100 w-full h-screen">
      <Sidebar />
      <div className="w-9/12">{children}</div>
    </div>
  );
}
