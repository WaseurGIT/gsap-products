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

    login(email, password).then(async (res) => {
      const user = res.user;

      //   write the backend code here
      Swal.fire({
        toast: true, // enables toast mode
        position: "top-end", // top-right corner
        icon: "success", // "success", "error", "info", etc.
        title: "Login Successful", // the text you want to show
        showConfirmButton: false,
        timer: 2000, // auto-close after 2 seconds
        timerProgressBar: true, // optional progress bar
        background: "#f0f0f0", // optional: change background
        iconColor: "#4ade80", // optional: change icon color
      });
    });

    form.reset();
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    const res = await googleLogin();
    Swal.fire({
      toast: true, // enables toast mode
      position: "top-end", // top-right corner
      icon: "success", // "success", "error", "info", etc.
      title: "Google Login Successful", // the text you want to show
      showConfirmButton: false,
      timer: 2000, // auto-close after 2 seconds
      timerProgressBar: true, // optional progress bar
      background: "#f0f0f0", // optional: change background
      iconColor: "#4ade80", // optional: change icon color
    });
    navigate('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left - Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h2>
          <p className="text-gray-500 mt-2">Please login to your account</p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Password with Eye Toggle */}
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
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <h1 className="text-gray-600 cursor-pointer">Forget Password!</h1>
            </div>

            <button
              onClick={handleGoogleLogin}
              type="button"
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

          <p className="mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-1/2 hidden md:block">
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
