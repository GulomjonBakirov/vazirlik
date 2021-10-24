import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import defaultAvatar from "./avatar.png";

import { logout } from "../../../actions/userActions";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: defaultAvatar,
};
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Biz haqimizda", href: "/about", current: false },
];
const profileNavigation = [
  { name: "Settings", href: "/profile/settings", current: false },
  { name: "Kurslarim", href: "/profile/mycourses", current: false },
];
const defaultNavigation = [
  { name: "Kirish", href: "/login" },
  { name: "Ro'yxatdan o'tish", href: "/registration" },
];
const userNavigation = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "/profile/settings" },
  { name: "Chiqish", href: "/logout" },
];

export default function Nav({ children }) {
  const { error, loading, isAuthanticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    message.success("Muvafaqqiyatli Tizimdan Chiqildi");
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      /> */}
                      <Link to="/">
                        <h1 className="text-white">Logo</h1>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {isAuthanticated
                          ? profileNavigation.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                                activeStyle={{
                                  backgroundColor:
                                    "rgba(17, 24, 39, var(--tw-bg-opacity))",
                                  color:
                                    "rgba(255, 255, 255, var(--tw-text-opacity))",
                                }}
                              >
                                {item.name}
                              </NavLink>
                            ))
                          : navigation.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                                activeStyle={{
                                  backgroundColor:
                                    "rgba(17, 24, 39, var(--tw-bg-opacity))",
                                  color:
                                    "rgba(255, 255, 255, var(--tw-text-opacity))",
                                }}
                              >
                                {item.name}
                              </NavLink>
                            ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full "
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {isAuthanticated
                              ? userNavigation.map((item) =>
                                  item.name === "Chiqish" ? (
                                    <Menu.Item key={item.name}>
                                      <button
                                        onClick={logoutHandler}
                                        className="block px-4 py-2 text-sm text-red-600  "
                                      >
                                        {item.name}
                                      </button>
                                    </Menu.Item>
                                  ) : (
                                    <Menu.Item key={item.name}>
                                      <a
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-700"
                                      >
                                        {item.name}
                                      </a>
                                    </Menu.Item>
                                  )
                                )
                              : defaultNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="block px-4 py-2 text-sm text-gray-700"
                                    >
                                      {item.name}
                                    </Link>
                                  </Menu.Item>
                                ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {isAuthanticated
                    ? profileNavigation.map((item) => (
                        // <Disclosure.Button
                        //   as="a"
                        //   className={classNames(
                        //     item.current
                        //       ? "bg-gray-900 text-white"
                        //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        //     "block px-3 py-2 rounded-md text-base font-medium"
                        //   )}
                        //   aria-current={item.current ? "page" : undefined}
                        // >
                        <NavLink
                          to={item.href}
                          key={item.name}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                              px-3 py-2 rounded-md text-base font-medium"
                          activeStyle={{
                            backgroundColor:
                              "rgba(17, 24, 39, var(--tw-bg-opacity))",
                            color:
                              "rgba(255, 255, 255, var(--tw-text-opacity))",
                          }}
                        >
                          {item.name}
                        </NavLink>
                        // </Disclosure.Button>
                      ))
                    : navigation.map((item) => (
                        // <Disclosure.Button
                        //   as="a"
                        //   className={classNames(
                        //     item.current
                        //       ? "bg-gray-900 text-white"
                        //       : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        //     "block px-3 py-2 rounded-md text-base font-medium"
                        //   )}
                        //   aria-current={item.current ? "page" : undefined}
                        // >
                        <NavLink
                          to={item.href}
                          key={item.name}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block
                              px-3 py-2 rounded-md text-base font-medium"
                          activeStyle={{
                            backgroundColor:
                              "rgba(17, 24, 39, var(--tw-bg-opacity))",
                            color:
                              "rgba(255, 255, 255, var(--tw-text-opacity))",
                          }}
                        >
                          {item.name}
                        </NavLink>
                        // </Disclosure.Button>
                      ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {isAuthanticated
                      ? userNavigation.map((item) =>
                          item.name === "Chiqish" ? (
                            <Disclosure.Button key={item.name} as="a">
                              <button
                                onClick={logoutHandler}
                                className="block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-white hover:bg-red-700  "
                              >
                                {item.name}
                              </button>
                            </Disclosure.Button>
                          ) : (
                            <Disclosure.Button key={item.name} as="a">
                              <Link
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                to={item.href}
                              >
                                {item.name}
                              </Link>
                            </Disclosure.Button>
                          )
                        )
                      : defaultNavigation.map((item) => (
                          <Disclosure.Button key={item.name} as="a">
                            <Link
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                              to={item.href}
                            >
                              {item.name}
                            </Link>
                          </Disclosure.Button>
                        ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main> */}
      </div>
    </>
  );
}
