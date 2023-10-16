"use client"
import Link from "next/link";
import SwitchCartAuth from "./SwitchCartAuth";
import Button from "./Button";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/user-context";
import { useSetCookieUser } from "@/hooks/useCookieUser";

function HeaderRes() {

    const { token } = useContext(UserContext);

  const logoutHandler = async () => {
    try {
      const request = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}logout`,  {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });
      const response = await request.json();
      if (response.status_code == 200) {
        useSetCookieUser(null, null);
        return window.location.reload();
      }
      return false;
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    if (token) {
    }
}, [token]);

  return (
    <nav className="navbar p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {token ? <Button className="bg-transparent" onClick={logoutHandler}>Logout</Button> : ''}
            </li>
          </ul>
        </div>
        <Link href="#" className="btn btn-ghost normal-case text-xl p-0">
          Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {token ?<Button className="bg-transparent" onClick={logoutHandler}>Logout</Button> : ''}
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <SwitchCartAuth />
      </div>
    </nav>
  );
}

export default HeaderRes;
