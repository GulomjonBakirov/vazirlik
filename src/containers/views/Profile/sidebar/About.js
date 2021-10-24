import { message } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../actions/userActions";

export default function About(props) {
  const dispatch = useDispatch();
  const { error, loading, isAuthanticated } = useSelector(
    (state) => state.auth
  );
  const logoutHandler = () => {
    dispatch(logout());
    message.success("Muvafaqqiyatli Tizimdan Chiqildi");
  };

  const { userInfo } = props;
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span clas="text-green-500">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span className="tracking-wide">About</span>
      </div>
      <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Ism</div>
            <div className="px-4 py-2">{userInfo && userInfo.name}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Familiya</div>
            <div className="px-4 py-2">{userInfo && userInfo.Surname}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Otasining Ismi</div>
            <div className="px-4 py-2">{userInfo && userInfo.FatherName}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Jinsi</div>
            <div className="px-4 py-2">{userInfo && userInfo.Jinsi}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Mobile Telefon No</div>
            <div className="px-4 py-2">
              <a
                className="text-blue-800"
                href={`tel:${userInfo && userInfo.Workph}`}
              >
                {userInfo && userInfo.Workph}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Uy Telefon No.</div>
            <div className="px-4 py-2">
              <a
                className="text-blue-800"
                href={`tel:${userInfo && userInfo.Homeph}`}
              >
                {userInfo && userInfo.Homeph}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Address</div>
            <div className="px-4 py-2">{`${userInfo && userInfo.Region}, ${
              userInfo && userInfo.District
            }`}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Tug'ilgan Sana</div>
            <div className="px-4 py-2">{userInfo && userInfo.DateBirth}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Muassasa</div>
            <div className="px-4 py-2">{userInfo && userInfo.Muassasasi2}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Passport Raqami</div>
            <div className="px-4 py-2">{userInfo && userInfo.JSHSHIR}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">UserName</div>
            <div className="px-4 py-2">{userInfo && userInfo.username}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email.</div>
            <div className="px-4 py-2">
              <a
                className="text-blue-800"
                href={`mailto:${userInfo && userInfo.Email}`}
              >
                {userInfo && userInfo.Email}
              </a>
            </div>
          </div>
        </div>
        <div className="text-right my-2">
          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded"
          >
            Chiqish
          </button>
        </div>
      </div>
    </div>
  );
}
