import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="flex justify-center gap-20 bg-slate-600 text-white p-5 text-2xl w-full">
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"/"}>Login</Link>
      </h2>
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"register"}>Register</Link>
      </h2>
      <h2 className="hover:text-gray-300 hover:underline">
        <Link to={"product"}>Product</Link>
      </h2>
    </div>
  );
};

export default Navbar;
