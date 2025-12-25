import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then(() => {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Login Successful",
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

  const handleGoogleLogin = async () => {
    await googleLogin();
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Google Login Successful",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#f0f0f0",
      iconColor: "#4ade80",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mt-2">Please login to your account</p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

            <h1 className="text-gray-600 cursor-pointer text-right text-sm">
              Forget Password!
            </h1>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition cursor-pointer"
            >
              <FcGoogle size={22} />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>

            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 flex items-center justify-center gap-2">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
