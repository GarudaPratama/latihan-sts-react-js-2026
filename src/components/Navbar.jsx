import React from "react";
import { NavLink } from "react-router";

function Navbar() {

    const isActive = ({ isActive }) => (isActive ? "font-semibold text-black bg-gray-200 px-4 py-2 rounded-md" : "font-semibold text-gray-400 px-4 py-2 hover:bg-gray-100 hover:text-black rounded-md");

  return (
    <div className="flex p-12 gap-8 items-center justify-center">
      <h1 className="font-bold text-3xl">BukuKU</h1>
      <div className="w-0 h-8 border"></div>
      <NavLink className={isActive} to="/" >Home</NavLink>
      <NavLink className={isActive} to="/about">About</NavLink>
      <NavLink className={isActive} to="/testimony">Testimony</NavLink>
      <NavLink className={isActive} to="/faq">FAQ</NavLink>
    </div>
  );
}

export default Navbar;
