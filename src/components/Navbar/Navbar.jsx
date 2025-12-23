import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./index";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around gap-20 py-3 text-white fixed top-0 w-full backdrop-blur-sm bg-black/70 z-50">
      <Link to="/" className="font-semibold text-2xl pacifico-regular ">
        <span className="text-indigo-500">GSAP</span>{" "}
        <span className="text-orange-400">Fashion</span>
      </Link>
      <div className="flex items-center justify-center gap-5">
        {navLinks.map((link) => (
          <p className="" key={link.id}>
            <Link to={`${link.id}`}>{link.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
