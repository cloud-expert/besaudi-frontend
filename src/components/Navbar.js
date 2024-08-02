import { faList } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { getCurrentUser, logout } from "../services/auth.service";
export default function Navbar({ isLogged }) {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between align-middle bg-gradient-to-b from-[#632DF2] to-[#472996] -mx-16 px-16 md:bg-gradient-to-t md:from-transparent md:to-transparent">
        <img
          src="/img/Logo.png"
          alt="Logo"
          className="z-50 my-3 hover:cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="hidden md:flex">
          <p
            className={`navbar-link ${
              window.location.hash[2] === "b" && "text-[#D0BCFF]"
            }`}
            onClick={() => navigate("/besaudi")}
          >
            Be Saudi
          </p>
          <p
            className={`navbar-link ${
              window.location.hash[2] === "l" && "text-[#D0BCFF]"
            }`}
            onClick={() => navigate("/livesaudi")}
          >
            Live Saudi
          </p>
          {isLogged ? (
            <p
              className={`navbar-link ${
                window.location.hash[2] === "g" && "text-[#D0BCFF]"
              }`}
              onClick={() => navigate("/gallary")}
            >
              Gallary
            </p>
          ) : (
            <p className="navbar-link" onClick={() => navigate("/signin")}>
              Log in
            </p>
          )}
          {!isLogged && (
            <button className="button" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          )}
          {isLogged && (
            <select className="h-10 px-2 my-2 text-white bg-transparent border-white">
              <option>English</option>
              <option>Arabic</option>
            </select>
          )}
          <p className="navbar-link">|</p>
          {!isLogged ? (
            <select className="h-10 px-2 my-2 text-white bg-transparent border-white">
              <option>English</option>
              <option>Arabic</option>
            </select>
          ) : (
            <div className="py-2 h-14">
              <div
                className="mx-2 h-full  text-white hover:cursor-pointer flex items-center justify-center
              hover:text-[#D0BCFF] bg-gradient-to-tr from-[#2A01FF] via-[#760f69] to-[#7c5819] 
                rounded-3xl px-8"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <p>{getCurrentUser() && getCurrentUser().user.name}</p>
              </div>
              {dropdownVisible && (
                <div
                  className="hover:text-[#D0BCFF]  hover:cursor-pointer mt-1 text-center text-white bg-gradient-to-tr from-[#2A01FF] via-[#760f69] to-[#7c5819] mx-2 rounded-3xl px-8 py-2
              -translate-y-[100%]  logout"
                  id="logout"
                  onClick={() => {
                    logout();
                    window.location.reload();
                  }}
                >
                  Logout
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className="md:hidden rounded-[50%] bg-white p-2"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <FontAwesomeIcon icon={faList} className="text-2xl text-black" />
        </div>

        <div
          className={
            sidebarVisible
              ? "fixed left-0 top-0 h-full max-w-[300px] w-2/3  bg-gradient-to-b from-[#151431] to-[#472996] border-r border-purple-800 duration-500 ease-in-out z-[51]"
              : "fixed -left-full"
          }
        >
          <img
            src="/img/Logo.png"
            alt="Logo"
            className="z-50 my-3 ml-5 hover:cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul>
            <li className="sidebar-link" onClick={() => navigate("/besaudi")}>
              Be Saudi
            </li>
            <li className="sidebar-link" onClick={() => navigate("/livesaudi")}>
              Live Saudi
            </li>
            {!isLogged ? (
              <>
                <li
                  className="sidebar-link"
                  onClick={() => navigate("/signin")}
                >
                  Log in
                </li>
                <li
                  className="sidebar-link"
                  onClick={() => navigate("/signout")}
                >
                  Sign up
                </li>
              </>
            ) : (
              <>
                <li
                  className="sidebar-link"
                  onClick={() => navigate("/gallary")}
                >
                  Gallary
                </li>
                <li
                  className="sidebar-link"
                  onClick={() => navigate("/logout")}
                >
                  Sign out
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
