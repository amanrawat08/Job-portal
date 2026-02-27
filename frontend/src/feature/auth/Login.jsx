import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { LOGIN_USER_URL } from "../../utils/comman";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/userSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        LOGIN_USER_URL,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      ); 
      localStorage.setItem("token", res.data.token);
      console.log( res?.data?.user);
      
  //    const { _id, name: user, email: userEmail, role, company } = res?.data?.user; 
      toast.success(res?.data?.message);
      console.log(res?.data?.user);
      
      dispatch(setUserDetails(res?.data?.user));
      setEmail("");
      setPassword("");
      if (role === "recruiter") {
        navigate('/recuiter') 
      } else { 
        navigate('/home');
      }
      toast.success(res.data.message);
    } catch (error) {
    //  console.log(error.response); // 👈 IMPORTANT

      toast.error(
        error?.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="hidden lg:block">
          <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full">
            WELCOME BACK
          </span>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            Log in to continue <br /> your job search
          </h1>

          <p className="text-slate-600 max-w-lg mb-8">
            Access personalised recommendations, manage your applications, and
            stay ahead with instant updates from top employers.
          </p>

          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Track your applications in real time
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Discover openings tailored to your skills
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Save jobs and set alerts in one dashboard
            </li>
          </ul>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Sign in to your account
          </h2>
          <p className="text-slate-600 mb-6">
            Enter your details below or continue with a social account.
          </p>

          {/* Social Login
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex items-center justify-center gap-3 w-full border border-slate-300 rounded-lg py-2 hover:bg-slate-50 transition">
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium">Login with Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 w-full border border-slate-300 rounded-lg py-2 hover:bg-slate-50 transition">
              <FaLinkedinIn className="text-blue-600 text-lg" />
              <span className="text-sm font-medium">Login with LinkedIn</span>
            </button>
          </div>
 */}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@email.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                {/*
                  <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              */}
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                name="password"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/*<div className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="rounded" />
              Keep me signed in
            </div> */}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            New to JobsPortal?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
