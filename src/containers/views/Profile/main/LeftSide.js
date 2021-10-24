import React from "react";
import FriendsCard from "./FriendsCard";
import ProfileInfo from "./ProfileInfo";
import { useDispatch, useSelector } from "react-redux";

export default function Main({ history }) {
  const {
    loading,
    error,
    isAuthanticated,
    user: User,
  } = useSelector((state) => state.auth);
  return (
    <div className="w-full md:w-3/12 md:mx-2">
      {/* <!-- Profile Card --> */}
      <ProfileInfo userInfo={User.user} />
      {/* <!-- End of profile card --> */}
      <div className="my-4"></div>
      {/* <!-- Friends card --> */}
      <FriendsCard />
      {/* <!-- End of friends card --> */}
    </div>
  );
}
