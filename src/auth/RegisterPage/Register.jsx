import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain one special character.");
      return;
    } else if (password !== confirmPassword) {
      setError("Password and Confirmed Password do not match.");
      return;
    } else {
      setError("");
    }

    register(email, password).then(() => {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Account Created Successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#f0f0f0",
        iconColor: "#4ade80",
      });
    });

    form.reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Create Account ✨
          </h2>
          <p className="text-gray-500 mt-2">Join us and start shopping today</p>

          <form onSubmit={handleRegister} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              required
              placeholder="Email address"
              name="email"
              className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
                className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button className="w-full py-3 bg-orange-500 text-white rounded-lg cursor-pointer transition">
              Register
            </button>
          </form>

          {error && <div className="text-red-500 p-2">{error}</div>}

          <p className="mt-4 text-sm text-gray-600 flex items-center justify-center gap-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
