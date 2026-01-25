import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Create your account
        </h2>
        <p className="text-slate-600 mb-6">
          Sign up to start applying for jobs.
        </p>

        {/* Social Signup */}
        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 w-full border border-slate-300 rounded-lg py-2 hover:bg-slate-50 transition">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>

          <button className="flex items-center justify-center gap-3 w-full border border-slate-300 rounded-lg py-2 hover:bg-slate-50 transition">
            <FaLinkedinIn className="text-blue-600 text-lg" />
            <span className="text-sm font-medium">Sign up with LinkedIn</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-sm text-slate-400">OR</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Register Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
