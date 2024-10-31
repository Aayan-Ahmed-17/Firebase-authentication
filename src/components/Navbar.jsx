import React from "react";
import { Link } from "react-router-dom";
import { SignoutFuncBtn } from "../routes/Product";

const Navbar = ({showSignoutButton = false}) => {

  return (
    <div className="flex justify-center gap-20 bg-slate-600 text-white p-5 text-2xl w-full">
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"/"}>Register</Link>
      </h2>
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"login"}>Login</Link>
      </h2>
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"product"}>Product</Link>
      </h2>
      {showSignoutButton && <SignoutFuncBtn />}
    </div>
  );
};

export default Navbar;
