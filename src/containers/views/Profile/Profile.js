import React, { useEffect } from "react";
import Loading from "../../layouts/Loading/Loading";
import LeftSide from "./main/LeftSide";
import Sidebar from "./sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";

export default function Profile({ history }) {
  const {
    loading,
    error,
    isAuthanticated,
    user: User,
  } = useSelector((state) => state.auth);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : isAuthanticated ? (
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <LeftSide />
            {/* <!-- Right Side --> */}
            <Sidebar />
          </div>
        </div>
      ) : (
        <h1>PLease login for this access ???</h1>
      )}
    </div>
  );
}
