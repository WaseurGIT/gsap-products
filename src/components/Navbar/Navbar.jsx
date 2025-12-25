import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./index";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/70 text-white">
      <div className="flex items-center justify-between px-6 md:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="font-semibold text-2xl pacifico-regular">
          <span className="text-indigo-500">GSAP</span>{" "}
          <span className="text-orange-400">Fashion</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.route}
              className="hover:text-indigo-400 hover:font-semibold transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-xl hover:text-red-400 transition"
              title="Logout"
            >
              <FaSignOutAlt />
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-400">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.route}
              onClick={() => setOpen(false)}
              className="block hover:text-indigo-400"
            >
              {link.title}
            </Link>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-400"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
