import Link from "next/link";
import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

type NavbarProps = {
  isUserLoggedIn: boolean;
};
function Navbar({ isUserLoggedIn }: NavbarProps) {
  return (
    <>
      <ul className="w-screen flex justify-around bg-opacity-30 font-extralight text-xl text-white bg-gray-200 h-16 items-center">
        <NavbarItem hrefLink="/" text="MLA" />
        <div className="flex justify-center gap-10">
          {isUserLoggedIn && (
            <NavbarItem hrefLink="/applications" text="Applications" />
          )}
          {isUserLoggedIn && (
            <NavbarItem hrefLink="/my_account" text="My Account" />
          )}
        </div>
        <div>
          {!isUserLoggedIn && <NavbarItem hrefLink="/login" text="Login" />}
          {isUserLoggedIn && <NavbarItem hrefLink="/logout" text="Logout" />}
        </div>
      </ul>
    </>
  );
}

export default Navbar;
