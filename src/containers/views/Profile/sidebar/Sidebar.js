import React from "react";
import About from "./About";
import MyCourses from "./MyCourses";
import Loading from "../../../layouts/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const {
    loading,
    error,
    isAuthanticated,
    user: User,
  } = useSelector((state) => state.auth);
  return (
    <div className="w-full md:w-9/12 mx-2 h-64">
      <About userInfo={User.user} />

      <div className="my-4"></div>

      <MyCourses userInfo={User.user} />
    </div>
  );
}
